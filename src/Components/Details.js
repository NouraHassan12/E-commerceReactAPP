import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import '../StyleSheets/DetailsCSS.css';


export default class Details extends Component {
  render() {
    return (
     <ProductConsumer>
       {
         value =>{
           const {id,
            company,
            img,
            info,
            price,
            title,
            inCart} =
           value.detailProduct;
           return(
<div className="container py-5">
  <div className="row">
    <div className="col-10 mx-auto my-5 text-center">
           <h1>{title}</h1>
    </div>
  </div>

  <div className="row">
    <div className="col-10 mx-auto col-md-6 my-3">
      <img  src={img} className="img-fluid" alt="details"/>
    </div>

    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
           <h2> model:{title}</h2>
           <h4 className="text-title text-uppercase mt-3 mb-2"> 
           made by:<span>{company}</span></h4>

           <h4 className="text-title text-uppercase mt-3 mb-2">
             <strong>Price:<span>$</span>{price}</strong></h4>

             <p className="text-capitalize mb-0 mt-3 font-weight-bold">
               some info about product:
             </p>
           <p className="text-muted lead">{info}</p>

           <div>
             <Link to="/">
             <button className="details-btn">back to products</button>
             </Link>
             
             <button className="details-btn" disabled={inCart ? true : false}
             onClick={() => {value.AddToCart(id)
              value.openModal(id);}}>
               {inCart?"inCart":"add to cart"}
             </button>
           </div>
           
    </div>
  </div>

</div>
           )
         }
       }
     </ProductConsumer>
    );
  }
}
