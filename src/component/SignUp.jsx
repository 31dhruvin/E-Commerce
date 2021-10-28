import React, { useState,useContext } from 'react'
import {Link} from "react-router-dom"
import {fire} from '../Firebase'
import swal from "sweetalert";
import {useHistory} from "react-router-dom"
import UserStore from '../Store'

function SignUp() {
    const history = useHistory()
    const { userData, setUserData } = useContext(UserStore);
    const [loading, setLoading] = useState(false);

    const signUpHandler = async () => {
        setLoading(true);
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            setLoading(false);
            return;
          }
          try {
            const userCredentials = await fire
              .auth()
              .createUserWithEmailAndPassword(email, password);
            setLoading(false);
            setUserData({
              ...userData,
              auth: true,
              data: userCredentials.user,
            });
          } catch (error) {
            setLoading(false);
            swal(error.message, "", "error");
            console.log(error.message);
          }
        };
    
    return (
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div className="mb-3">
                <div className="my-3">
                <h1 className="text">Sign Up</h1>
                </div>
                </div>
                <div class="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control shadow-none" id="email" placeholder="xyz@gmail.com" style={{width:"50%"}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control shadow-none" id="password" placeholder="password" required style={{width:"50%"}}/>
                </div>
                
                <p className="form-text" style={{textDecoration:"none"}}>
                    <Link className="text-dark" to="/login">Login?</Link>
                </p> 
                
              
                <div className="col-12 mt-2">
                    <button className="btn btn-outline-dark shadow-none" onClick={signUpHandler} type="submit" style={{width:"50%"}}>Sign Up{" "}{
                        loading ? (
                            <span
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : (
                            ""
                          )
                        

                    }
                    </button>
                </div>
                
                
                </div>
            </div>
        </div>
        
    )
}

export default SignUp
