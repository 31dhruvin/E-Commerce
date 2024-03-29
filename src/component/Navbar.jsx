import React, { useContext,useState } from 'react'
import {BrowserRouter as Router, Link,Switch,Route,Redirect} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'
import Reset from './Reset'
import Calamine from "./Calamine"
import DiffProd from './DiffProd'
import ourServices from './pages/ourServices'
import {fire} from '../Firebase'
import Data from './product.json'
import UserStore from "../Store"
import {Cart}  from './Cart'
import {Order} from './Order'
import { CartContext } from './Cartcontext'
import '../Style/style.css'
import colors from 'tailwindcss/colors'

function Navbar() {
  const {totalQty} = useContext(CartContext)
  const { userData, setUserData } = useContext(UserStore);useState({
    auth:false,
  })
  const Logout = () =>{
    fire.auth().signOut().then(() => {
      setUserData({
        ...userData,
        auth:false,
        data:null,
      })
    }).catch((error) => {
      console.log(error.message)
    })
  }
  
    return (
        <Router>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              }

      </ul>
     
      </div>
      </div>
      </nav>
      */}


<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div class="container">
  <Link class="navbar-brand" to="/" id='bebo'>JCW.</Link>

  <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsFurni">
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li class="nav-item">
      <Link to="/" className="nav-link" >Home</Link>
      </li>
      <li><Link to="/products" className="nav-link" >Shop</Link></li>
      <li><Link to="/" className="nav-link" >About Us</Link></li>
      <li><Link to="/services" className="nav-link" >Services</Link></li>
      {/* <li><Link to="/contactUs" className="nav-link" >Contact us</Link></li> */}
      <li className="nav-item">
          <Link to="/cartproducts" className="nav-link"><strong><i class="fas fa-cart-shopping"></i></strong></Link>
          <div className="relative">
          <span className="no-of-products" >{totalQty}</span>
          </div>
        </li>
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
              }

    </ul>

    {/* <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
      <li><i class="fa-solid fa-user"></i></li>
      <li><a class="nav-link" href="cart.html"><img src="E:\Summer\jcw\src\images\cart.svg" /></a></li> 
    </ul> */}
  </div>
</div>
  
</nav>
{/* <!-- End Header/Navigation -->

<!-- Start Hero Section --> */}

      




<Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/product/:name" component={Calamine} />
    <Route exact path="/cartproducts" component={Cart} />
    <Route exact path="/cashout" component={Order}  />
    {/* <Route exact path="/products" Component={DiffProd} /> */}
    <Route exact path="/products" component={DiffProd} />
    <Route exact path="/services" component={ourServices} />

    
        
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
