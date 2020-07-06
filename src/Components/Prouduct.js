import React, { Component } from 'react';
import {Link} from'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types'
import '../StyleSheets/ProductCSS.css';
export default class Prouduct extends Component {
  render() {
    const {id ,
           title ,
           img ,
           price ,
           inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-lg-3 col-md-6 my-3">
       <div className="card">
<ProductConsumer>
  {(value) =>(
    <div className="img-container p-5"
    onClick={()=>{
      value.handelDetail(id)
    }}>
      <Link to="/Details">
        <img src={img} alt="product" className="card-img-top" />
       
       

       
      </Link>
      <button className="cart-btn"
        disabled={inCart ? true : false}
        onClick={()=>{value.AddToCart(id)
                      value.openModal(id)}} >
           {
          inCart ? (<p className="text-capitalize mb-0" disabled>in cart </p>):
          (<i class="fas fa-shopping-cart"></i>)
        }
        </button>
    </div>
  )}
     
         </ProductConsumer>
         <div className="card-footer d-flex
          justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
       </div>

      </div>
    );
  }
}
Prouduct.prototypes={
  Prouduct:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    price:PropTypes.number,
    title:PropTypes.string,
    inCart:PropTypes.bool
  }).isRequired
}