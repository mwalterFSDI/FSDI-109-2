import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./product.css";
import { connect } from "react-redux";
import { addProductToCart } from "../store/actions/actions";


class Product extends Component {
    state = {
      quantity: this.props.data.minimum || 1,
      }
    render() { 
        return ( 
            <div className="product">
                
              <img 
              className="product-image" src={"/images/products/" + this.props.data.image} alt="product"></img>
              
              <label>{this.props.data.title}</label>

              <label>${(this.props.data.price * this.state.quantity).toFixed(2)}</label>
              <label>${this.props.data.price.toFixed(2)}</label> 


              <QuantityPicker minimum={this.props.data.minimum || 1} onValueChange={this.handleQuantityChange}></QuantityPicker>

              <button
              onClick={this.handleAddToCart} className="btn btn-sm btn-primary">Add</button>

            </div>
         );
    }

    calculateTotal = () => {
      var total = this.props.data.price * this.state.quantity;
      return total.toFixed(2);
    }

    handleQuantityChange = (qnty) => {
      console.log("Quantity Change to" + qnty);
      this.setState({quantity: qnty});
    };

    handleAddToCart =()=>{
      console.log("Add 2 Cart");
      // dispatch the action
      var prodInCart = {
        product: this.props.data,
        quantity: this.state.quantity
      }
      this.props.addProductToCart( prodInCart );
    };
}

// connect requires 2 parameters
// 1- what to read
// 2- actions to dispatch 
export default connect(null, {addProductToCart})(Product);
