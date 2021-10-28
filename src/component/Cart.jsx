import React, { useContext, useEffect,useState } from 'react'
import { CartContext } from './Cartcontext'
import Navbar  from './Navbar';
import { Icon } from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_remove } from 'react-icons-kit/md/ic_remove'
import { iosTrashOutline } from 'react-icons-kit/ionicons/iosTrashOutline'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import fire from '../Firebase'
import UserStore from '../Store'

export const Cart = ({ user }) => {
    const { userData, setUserData } = useContext(UserStore);useState({
        auth:false,
      });
    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    return (
        <>
            <>
                {shoppingCart.length !== 0 && <h1>Cart</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in</div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.name}>

                            <div className='cart-img'>
                                <img src={cart.image} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.name}</div>

                            <div className='cart-price-orignal'>Rs {cart.price}</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', name: cart.name, cart })}>
                                <Icon icon={ic_add} size={24} />
                            </div>

                            <div className='quantity'>{cart.stock}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', name: cart.name, cart })}>
                                <Icon icon={ic_remove} size={24} />
                            </div>

                            <div className='cart-price'>
                                Rs {cart.TotalProductPrice}
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', name: cart.name, cart })}>
                                <Icon icon={iosTrashOutline} size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='/cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
    )}
