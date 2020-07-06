import React, { Component } from 'react';
import Title from '../Title';
import Cartcolumns from './Cartcolumns';
import Empitycart from './Empitycart';
import {ProductConsumer} from '../../Context';
import Cartlist from './Cartlist';
import Carttotals from './Carttotals';
export default class Cart extends Component {
  render() {
    return (
     <section>
       <ProductConsumer>
         {value=>{
           const {cart}= value;
           if(cart.length > 0){
              return(
                <React.Fragment>
                  <Title name="your" title="Cart" />
                    <Cartcolumns />
                    <Cartlist value={value}/>
                    <Carttotals value={value} />
                </React.Fragment>
              )    
            }
              else{
                return   <Empitycart />;
           }
         }}

       </ProductConsumer>

      
     </section>

    );
  }
}
