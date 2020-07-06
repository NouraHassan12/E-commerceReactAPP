import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
        <nav class="navbar  navbar-expand-sm navbar-dark bg-dark px-sm-5">
          <Link to="/" >
          <i class="far fa-gem" style={{fontSize:'30px', color:'white'}}></i>
          </Link>

    <ul class="navbar-nav align-items-center">
      <li class="nav-item ml-5">
       <Link to="/" className="nav-link"style={{color:'white'}}>
       Products
       </Link>
      </li>
      </ul>

      <Link to="/Cart"className="ml-auto">
          <button style={{background:'none',border:'none'}}>
          <i class="fas fa-shopping-cart" style={{color:"white" , fontSize:'18px'}}></i>
       
          </button>
      </Link>
    

        
      </nav>
    );
  }
}
