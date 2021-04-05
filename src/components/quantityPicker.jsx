import React, { Component } from 'react';

import "./quantityPicker.css";

class QuantityPicker extends Component {
    state = { 
        quantity:this.props.minimum || 1,
        name: 'Matt'
     }
    render() { 
        return (
            <div className="quantitypicker">
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
                <label>{this.state.quantity}</label>
                <button onClick={this.decreaseQuantity} className="btn btn-sm btn-dark">-</button>
                
            </div>
          );
    }
    


    increaseQuantity = () => {
        console.log("button clicked");
        // this.state.quantity = 999; <- DONT modify state directly

        let current = this.state.quantity + 1; // read from the state directly
        this.setState({ quantity: current});

        this.props.onValueChange(current);
    };

    decreaseQuantity = () => {
        let current = this.state.quantity - 1;
        if (current >= this.props.minimum ){
            this.setState({quantity: current});
            this.props.onValueChange(current);
        }
        // prevent current going below 1 
        
    }


}
 
export default QuantityPicker;