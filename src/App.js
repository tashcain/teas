import React, { Component } from 'react';
import './App.css';
import AboutUs from './components/About';
import Home from './components/Home';
import './components/comannt.css';
import Products from './components/products';
import Tulsigreentea from './components/products/tulsigreentea';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';
import Bluetea from './components/products/bluetea';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <li className="navbar-brand" style={{color: 'green'}} >LMAssamTea</li>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav" >
     <Link to="/"><li className="nav-item nav-link active" style={{color: 'green'}} >Home </li></Link> 
     <Link to = "/AboutUs"> <li className="nav-item nav-link"  style={{color: 'green'}} >AboutUs</li></Link>
     <Link to='/Products'><li className="nav-item nav-link"  style={{color: 'green'}} >Products</li></Link> 
    <li className="nav-item nav-link"  style={{color: 'green'}} >distist</li>
    </div>
  </div>
</nav>
        
    
     

      <Switch>

      <Route exact path = '/prod/01' component={Tulsigreentea}/>
      <Route exact path = '/prod/02' component={Bluetea}/>
      <Route exact path='/AboutUs' component={AboutUs}/>
      <Route exact path='/' component={Home}/>
      <Route exact path ='/products' component={Products}/>
      

      </Switch> 
       
          

     
      

    </BrowserRouter>

      </div>
    )
  }
}

