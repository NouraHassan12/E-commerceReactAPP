import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal';


function App() {
  return (
   <React.Fragment>


     <Navbar />
     <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Route  exact path="/" component={Productlist} />
       <Route path="/Details" component={Details} />
       <Route path="/Cart" component={Cart} />
       <Route  component={Default} />
     </BrowserRouter>
     <Modal />
   </React.Fragment>

  );
}

export default App;
