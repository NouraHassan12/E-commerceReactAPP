import React, { Component } from 'react';
import {storeProducts , detailProduct} from './data';
const ProductContext = React.createContext();


 class ProductProvider extends Component {


    state={
        Products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubTotal:0,
        cartTotal:0,
        cartTax:0
    }

    componentDidMount=()=>{
        this.setProducts();
    }

    setProducts = ()=>{
        let tempProducts=[];
        storeProducts.forEach(item =>{
            const singleitem ={...item};
            tempProducts =[...tempProducts , singleitem]
        });

          this.setState(()=>{
            return{Products:tempProducts}
        });
    }

    getItem = (id) =>{
        const product = this.state.Products.find(item => item.id === id);
        return product;
    }

    handelDetail = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    }

    AddToCart =(id)=>{
       let tempProducts= [...this.state.Products]
       const index = tempProducts.indexOf(this.getItem(id));
       const product = tempProducts[index]
       product.inCart=true;
       product.count=1;
       const price = product.price;
       product.total = price;
       this.setState(()=>{
           return{Products:tempProducts , cart:[...this.state.cart ,product]  }
       } ,
       ()=>{
           this.addTotals()
       } );
    }


    openModal = id =>{
        const Product = this.getItem(id);
        this.setState(()=>{
            return{modalProduct:Product , modalOpen:true}
        })
    }


    closeModal =() =>{
     this.setState(()=>{
         return{modalOpen:false }
     })
    }

    increment = (id)=>{
        let tempCart=[...this.state.cart];
        const selectProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index]

        product.count = product.count + 1 
        product.total = product.count * product.price

        this.setState(()=>{return{cart:[...tempCart]}} , ()=>{this.addTotals()})
        console.log("this is increment method")
    }

    decrement = (id)=>{
        let tempCart=[...this.state.cart];
        const selectProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index]

        product.count = product.count - 1

        if(product.count === 0){
            this.removeItem(id)
        }else{
            product.total = product.count * product.price
            this.setState(()=>{return{cart:[...tempCart]}} , ()=>{this.addTotals()})
        }
        console.log("this is decrement method")
    }

    removeItem=(id)=>{
        console.log("this item removed");
        let tempProduct=[...this.state.Products];
        let tempCart=[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id !== id);

        let index = tempProduct.indexOf(this.getItem(id));
        let removedItem = tempProduct[index];
        removedItem.inCart=false;
        removedItem.count=0;
        removedItem.total=0;

        this.setState(()=>{
            return{
                cart:[...tempCart],
                Products:[...tempProduct ]
                
            }
        }, ()=>{
            this.addTotals();
        })

    }

    clearCart=()=>{
        this.setState(()=>{
            return{cart:[] }; },
            ()=>{
                this.setProducts();
                this.addTotals()
           
        })
        console.log("cart was cleared")
    }

    addTotals = ()=>{
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handelDetail:this.handelDetail,
          AddToCart:this.AddToCart,
          openModal:this.openModal,
          closeModal:this.closeModal,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart,
          }}>
              
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider , ProductConsumer} ; 