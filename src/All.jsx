import React from "react"
import ReactTable from "react-table"
import {request} from "./api-client"
import "react-table/react-table.css";
import {Link} from "react-router-dom"

export default class All extends React.Component{

  state = {
    products: []
  }

  componentDidMount = () => {
    request.product.getAll().then((products) => this.setState({products}))
  }

  delete = (sku) => {
    request.product.delete(sku).then(() => window.location.reload())
  }

  render = () => {
    return (
      <div>
        <ReactTable
          data={this.state.products}
          columns={[
            {
              Header: "SKU",
              accessor: "sku",
              filterable: false,
              sortable: false
            },
            {
              Header: "Nombre",
              accessor: "nombre",
              filterable: false,
              sortable: false
            },{
              Header: "Precio",
              accessor: "precio",
              filterable: false,
              sortable: false
            },
            {
              Header: "Stock",
              accessor: "stock",
              filterable: false,
              sortable: false
            },
            {
              Header: "Acciones",
              id: "acciones",
              accessor: (product) =>
                <div>
                  <Link onClick={() => this.delete(product.sku)} to="#">Borrar</Link>
                  <Link style={{marginLeft: 10}} to={`/products/${product.sku}/update`}>Editar</Link>
                </div>,
              filterable: false,
              sortable: false
            }
          ]}
          pageSize={this.state.products.length + 2}
          className={'-striped -highlight'}
        />
      </div>
    )
  }

}