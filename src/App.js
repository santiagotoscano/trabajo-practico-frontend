import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import All from "./All.jsx"
import Create from "./Create.jsx"
import Update from "./Update.jsx"

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={() => <Redirect from="/" to="/products"/>} />
        <Route exact path="/products/:sku/update" component={Update} />
        <Route exact path="/products/create" component={Create} />
        <Route exact path="/products" component={All} />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/products">Listado</Link>
      </li>
      <li>
        <Link to="/products/create">Crear</Link>
      </li>
    </ul>
  );
}

export default App;