import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import '../StyleSheets/ModalCSS.css';

export default class Modal extends Component {
  render() {
    return (
     <ProductConsumer>
         {(value)=>{
             const {modalOpen,closeModal} = value;
             const {img , title , price} = value.modalProduct;

             if(!modalOpen){
                 return null;

             }
             else{
                 return(
                    <div className="modalcontainer">
                     <div className="container">
                         <div className="row">
                             <div id="modal" className="col-8 mx-auto col-md-6
                             col-lg-4 text-center text-capitalize">
                               <h5 className="mt-4">item added to the cart</h5>
                               <img src={img} alt="product" className="card-img-top" />
                               <h5>{title}</h5>
                               <h5 className="text-muted"> price :${price}</h5>
                               <Link to="/">
             <button onClick={()=>closeModal()}
             className="details-btn mb-4">Stor</button>
             </Link>

             <Link to="/Cart">
             <button onClick={()=>closeModal()}
             className="details-btn mb-4">Go To Cart</button>
             </Link>
                             </div>
                         </div>
                     </div>

                    </div>
                 )
             }
         }}
     </ProductConsumer>
    );
  }
}
