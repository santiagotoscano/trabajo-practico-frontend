import React from "react"
import {request} from "./api-client";

export default class Create extends React.Component{

  state = {
    sku: '',
    name: '',
    stock: '',
    price: ''
  }

  create = (e) => {
    e.preventDefault()
    const {sku, name, price, stock} = this.state
    request.product.create({sku, name, price, stock}).then(() => this.props.history.push('/products'))
  }

  render = () => {
    return (
      <div>
        <form onSubmit={(e) => this.create(e)} style={{display: "flex", flexDirection: "column", paddingLeft: 30}}>

          <input
            style={{maxWidth: 300, marginBottom: 30}}
            type="sku"
            value={this.state.sku}
            onChange={(e) => this.setState({sku: e.target.value})}
            placeholder="SKU"
          />

          <input
            style={{maxWidth: 300, marginBottom: 30}}
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
            placeholder="Nombre"
          />

          <input
            style={{maxWidth: 300, marginBottom: 30}}
            type="number"
            value={this.state.stock}
            onChange={(e) => this.setState({stock: e.target.value})}
            placeholder="Stock"
          />

          <input
            style={{maxWidth: 300, marginBottom: 30}}
            type="number"
            step=".01"
            value={this.state.price}
            onChange={(e) => this.setState({price: e.target.value})}
            placeholder="Precio"
          />

          <input style={{maxWidth: 300, marginBottom: 30}} type="submit"/>
        </form>
      </div>
    )
  }

}
