import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return (  <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(22, 94, 106)"}}>
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">Catalog</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>

          <div className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
              <i aria-hidden="true"  ></i>
              View Cart
              <span className="badge badge-primary cart-badge">
              {this.props.cart.length}
              </span>
            </Link>
          </div>


          </div>
        </nav>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    cart: state
  };

};


// read: pass a fn that maps the state to props 
export default connect(mapStateToProps ,null)(NavBar);