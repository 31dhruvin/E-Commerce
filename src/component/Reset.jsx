import React from 'react'
import fire from '../Firebase'
import {useHistory} from "react-router-dom"
import swal from "sweetalert";

function Reset() {
    const history = useHistory()
    const onsubmit =(e) => {
        e.preventDefault();
        const reset = fire.auth();
        const email = document.getElementById("email").value;
        if(email !==""){
            reset.sendPasswordResetEmail(email).then(() =>{
                swal(
                    "Email sent",
                    "Please verify your email and reset your password",
                    "success"
                  );
            })
            .catch(error => {
                swal(error.message, "", "error");
            })
        }
        else{
            swal(
                "Email can't be empty",
                "Please provide your email",
                "error"
              );
        }


    }
    return (
        <form className="container contact_div" onSubmit={onsubmit}>
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div className="mb-3">
                <div className="my-3">
                <h2 className="text">Forgot Password</h2>
                <br />
                <div class="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control shadow-none" id="email" placeholder="xyz@gmail.com" style={{width:"50%"}} />
                </div>
                <div className="col-12 mt-1">
                    <button className="btn btn-outline-dark shadow-none" type="submit" style={{width:"50%"}}>Reset</button>
                    <br />
                    <button className="btn btn-outline-dark shadow-none my-4" type="submit" onClick={() => history.push('/login')} style={{width:"50%"}}>Go back?</button>
                    
                </div>
                </div>
            </div>
        </div>
        </div>
        </form>
    )
}

export default Reset
