import React, { Component } from 'react';
import Prouduct from './Prouduct';
import Title from './Title';
// import {storeProducts} from '../data';
import {ProductConsumer} from '../Context';

export default class Productlist extends Component {

  // state={
  //   Products:storeProducts,
  // }
  render() {

    return (
  <React.Fragment>
<div className="py-4">
<div className="container">
<Title name="our" title="products" />

<div className="row">
  <ProductConsumer>
    {value => {
      return value.Products.map(product => {
        return <Prouduct key={product.id} product={product} />
      });
    }}
  </ProductConsumer>
</div>
</div>
</div>
  </React.Fragment>
    //  {/* <Prouduct /> */}
   
    );
  }
}
