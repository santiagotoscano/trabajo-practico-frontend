import React from "react"
import {request} from "./api-client";

export default class Update extends React.Component{

  state = {
    name: '',
    stock: '',
    price: ''
  }

  componentDidMount = () => {
    request.product.get(this.props.match.params.sku)
      .then((product) => this.setState({name: product.nombre, stock: product.stock, price: product.precio}))
  }

  update = (e) => {
    e.preventDefault()
    const {name, price, stock} = this.state
    request.product.update({id: this.props.match.params.sku, name, price, stock}).then(() => this.props.history.push('/products'))
  }

  render = () => {
    return (
      <div>
        <form onSubmit={(e) => this.update(e)} style={{display: "flex", flexDirection: "column", paddingLeft: 30}}>
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