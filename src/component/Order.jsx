import React, { useContext, useEffect,useState } from 'react'
import { CartContext } from './Cartcontext'
import {db} from '../Firebase'
import swal from "sweetalert";
export const Order = ({ cart }) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [pname,setPname] = useState("")
    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);
    const onsubmit = (e) =>{
        e.preventDefault();
        db.collection('Order').add({
            name:name,
            phone:phone,
            address:address,
            email:email,
            pname:pname,
            tprice:totalPrice,
            tquantity:totalQty,
        })
        .then(() =>{
            swal(
                "Thank You",
                "Your order is confirmed",
                "success"
              );
        })
        .catch(error => {
            swal(error.message, "", "error");
        })
        setName('')
        setPhone('')
        setEmail('')
        setAddress('')
        setPname('')
    }
    

    return (
        <>
        <form className="container contact_div" onSubmit={onsubmit}>
        <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div className="mb-3">
                <div className="my-3">
                <h1 className="text">Place Your Order here!!</h1>
                </div>
                    <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control shadow-none" id="name" placeholder="Name of the place*" style={{width:"50%"}} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control shadow-none" id="email" placeholder="xyz@gmail.com*" style={{width:"50%"}} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label htmlFor="phone" className="form-label">Contact No.</label>
                        <input type="tel" className="form-control shadow-none" id="phone" placeholder="9429000000*" style={{width:"50%"}} value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Address</label>
                    <textarea className="form-control shadow-none" id="address" placeholder="Address of your place*" rows="3" style={{width:"50%"}} value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                </div>

                <div className="mb-3">
                <input type="number" className='form-control' required
                        value={totalPrice} disabled />
                        </div>
                        <div className="mb-3">
                <input type="number" className='form-control' required
                        value={totalQty} disabled />
                        </div>

            
            {shoppingCart && shoppingCart.map(cart => (
                        //<input type="text" className='cart-name'  value={pname} onChange={(e) => setPname(e.target.value)}>{cart.name}
                           <div className='cart-name'>{cart.name}</div> 
                // </input>
                    ))
                    }
                    <div className="col-12">
                <button className="btn btn-dark shadow-none px-4" type="submit" >Place your Order</button>
                </div>
                    </div>
                    </div>
        </form>
        </>
    )
}

