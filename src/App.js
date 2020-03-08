import React,{ Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './pages/HomePage'
import Cart from './pages/CartPage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Products from './pages/ProductsPage'
import Default from './pages/Default'
import SingleProduct from './pages/SingleProductPage'
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SideCart from './components/SideCart'
import Footer from './components/Footer'
class  App extends Component{
  render(){
  return <>
    <Navbar/>
    <Sidebar/>
    <SideCart/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/products" exact component={Products}/>
      <Route path="/products/:id" component={SingleProduct}/>
      <Route path="/cart" component={Cart}/>
      <Route  component={Default}/>
    </Switch>
    <Footer/>    
  </>;
}
}
export default App;
