import React, { useState,useContext} from 'react'
import {Link,Redirect} from 'react-router-dom'
import fire from '../Firebase'
import {useHistory} from "react-router-dom"
import swal from "sweetalert";
import UserStore from '../Store'


function Login() {
    const history = useHistory()
    const {userData,setUserData} = useContext(UserStore)
    const[loading,setLoading] = useState(false);
    const loginhandler= async () => {
        setLoading(true)
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        
        console.log(email,password)
        
        if(!email || !password){
            setLoading(false)
            return;
        }
        try{
            const userCredentials = await fire.auth().signInWithEmailAndPassword(email, password) 
            console.log(userCredentials.user) 
            setLoading(false)
            setUserData({
                ...userData,
                auth:true,
                data:userCredentials.user
            })
        }
        catch(error){
            setLoading(false)
            swal(error.message, "", "error");
            console.log(error.message)
        }
    
        
    }
  
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div className="mb-3">
                <div className="my-3">
                <h1 className="text">Login</h1>
                <br />
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control shadow-none" id="email" placeholder="xyz@gmail.com" style={{width:"50%"}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control shadow-none" id="password" placeholder="password" style={{width:"50%"}}/>
                </div>
                <button className="btn btn-outline-dark shadow-none my-4" type="submit" onClick={() => history.push('/signup')} style={{width:"50%"}}>Sign Up?</button><br />
                <button className="btn btn-outline-dark shadow-none my-4" type="submit" onClick={() => history.push('/reset')} style={{width:"50%"}}>Forgot Password?</button>
                    
                <div className="col-12 mt-1">
                    <button className="btn btn-outline-dark shadow-none" onClick={loginhandler} type="submit" style={{width:"50%"}}>Login{" "}
                    {loading ? <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : ""}                 
                    </button>      
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )}
export default Login
