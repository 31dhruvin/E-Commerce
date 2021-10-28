import React, { useContext,useState } from 'react';
import {BrowserRouter as Router, Link,Switch,Route,Redirect} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'
import Reset from './Reset'
import Calamine from "./Calamine"
import {fire} from '../Firebase'
import Data from './product.json'
import UserStore from "../Store";
import {Cart}  from './Cart'
import {Order} from './Order'
import { CartContext } from './Cartcontext';

function Navbar() {
  const {totalQty} = useContext(CartContext)
  const { userData, setUserData } = useContext(UserStore);useState({
    auth:false,
  });
  const Logout = () =>{
    fire.auth().signOut().then(() => {
      setUserData({
        ...userData,
        auth:false,
        data:null,
      })
    }).catch((error) => {
      console.log(error.message)
    });
  }
  
    return (
        <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><strong>Logo</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link" ><strong>Home</strong></Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/cartproducts" className="nav-link"><strong>Cart</strong></Link>
          <div className="relative">
          <span className="no-of-products" >{totalQty}</span>
          </div>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/services" className="nav-link" tabindex="-1" aria-disabled="true"><strong>Services</strong></Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/wishlist" className="nav-link" tabindex="-1" aria-disabled="true"><strong>Wishlist</strong></Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li className="nav-item">
          <Link to="/profile" className="nav-link" tabindex="-1" aria-disabled="true"><strong>Profile</strong></Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {
                userData.auth ? (
                  <li className="nav-item">
                <Link onClick={Logout} className="nav-link"tabindex="-1" aria-disabled="true" to="/login">
                <strong>Logout</strong>
                </Link>
              </li>

                ):
                (
                  <span></span>
                )
              };

      </ul>
      <form className="d-flex">
        <input className="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      </div>
      </nav>
     
<Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/product/:name" component={Calamine} />
    <Route exact path="/cartproducts" component={Cart} />
    <Route exact path="/cashout" component={Order} >
            
        </Route>
        <Route exact path="/login">
              {userData.auth ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route exact path="/signup">
              {userData.auth ? <Redirect to="/" /> : <SignUp />}
            </Route>
            <Route exact path="/reset">
              {userData.auth ? <Redirect to="/" /> : <Reset />}
            </Route>
</Switch>
        </Router>
    )
}

export default Navbar
