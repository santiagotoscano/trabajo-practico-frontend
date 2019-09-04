export const addPutMethodToForm = form => {
  form.append("_method", "PUT");
  return form;
};


const httpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  canHaveBody: function(method) {
    return method === this.POST || method === this.PUT;
  }
};

const bodyIsJson = (body, method) => {

  if (httpMethods.canHaveBody(method)) {
    try {
      JSON.parse(body);
    } catch (error) {
      return false;
    }
    return true;
  }
  return false;
};

const makeHttpRequest = (
  url,
  method,
  body,
  headers,
) => {
  const mainFetch = () =>
    new Promise(resolve => {
      const r = new XMLHttpRequest();

      r.open(method, url, true);
      r.setRequestHeader("Accept", "application/json");
      if (bodyIsJson(body, method)) {
        r.setRequestHeader("Content-type", "application/json");
        r.setRequestHeader('Access-Control-Allow-Origin', '*');
      }


      r.onreadystatechange = () => {
        if (r.readyState === 4) {
          resolve({
            ok: r.status >= 200 && r.status < 300,
            status: r.status,
            statusText: r.statusText,
            json: () => Promise.resolve(JSON.parse(r.responseText)),
            text: () => Promise.resolve(r.responseText),
          });
        }
      };
      r.send(body);
    });

  const fetchWithAuthenticationHandler = () =>
    mainFetch().then(response => {
      if (!response.ok) {
        return response.text().then(text =>
          Promise.reject({
            status: response.status,
            error: text
          })
        );
      }
      return response;
    });

  return fetchWithAuthenticationHandler();
};



export const post = (url, body, headers) =>
  makeHttpRequest(
    url,
    httpMethods.POST,
    body,
    headers,
  );

export const put = (url, body, headers) =>
  makeHttpRequest(
    url,
    httpMethods.PUT,
    body,
    headers,
  );

export const get = (url) => {
  return makeHttpRequest(url, httpMethods.GET);
}


export const del = (url, headers) => makeHttpRequest(url, httpMethods.DELETE, null, headers);
