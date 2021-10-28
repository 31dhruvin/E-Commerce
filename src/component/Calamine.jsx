import React, { useContext,useState } from 'react';
import data from './product.json'
import './product'
import './dashboard.scss'
import UserStore from "../Store";
import { CartContext } from './Cartcontext';
import swal from "sweetalert";
const Calamine = ({match,history}) =>  {
    // const variable = useContext(CartContext)
    // console.log(variable)
    // const onsubmit = (e) =>{
    //     e.preventDefault();
    //     try {
    //         swal(
    //             "Your item is added in the cart",
    //             "Thank you",
    //             "success"
    //           );
    //     } catch (error) {
    //         swal(error.message, "", "error");
    //     }
        
    // }
    const {dispatch} = useContext(CartContext)
    const { userData, setUserData } = useContext(UserStore);useState({
        auth:false,
      });
    console.log(match)
    console.log(match.params.name)

    const pro = data.find(card=>card.name === match.params.name)
    console.log(pro)
    return (
        <div> 
        
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                <img src={pro.image} alt=" " className="image-responsive" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-1">
                        
                            
                        <h4 className="calamine_name"><u>{pro.name}</u></h4>
                        
                        
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-md-1">
                        
                        <h6 className="calamine_des">Hello</h6>
                        
                        </div>
                        </div>
                    <div className="row">
                        <div className="col-md-4">
                        <ul className="dashboard">
                  <li><i className="fa fa-star " aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 bottom-rule">
                    <h2 className="product-price">{pro.price}</h2>
                    </div>
                    </div>

                    <div className="row">
                    <div className="m-7 col-11 stock_details" >
                
                <div className="my-3">{pro.stock === 0 ?<h2 style={{backgroundColor:"red",color:"black",padding:'8px',borderRadius:"5px"}}>Out Of Stock</h2>:<h2 style={{color:"black",padding:'8px',borderRadius:"5px"}}>In Stock</h2>}</div>
                    <div className="my-3">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1" max="12" />
                        {/* <optgroup label="Quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </optgroup>  */}
                    </div>
                    {
                        userData.auth ? (
                            <button className="my-3 p-3 btn-dark btn-lg" style={{width:"auto",fontSize:"15px",padding:"8px"}} onClick={()=> {dispatch({type:'ADD to Cart',name:pro.name, pro})}} disabled={pro.stock === 0}><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart</button>
                        ):(
                            <button className="my-3 p-3 btn-dark btn-lg" style={{width:"auto",fontSize:"15px",padding:"8px"}} onClick={()=>history.push("/login")} disabled={pro.stock === 0}><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart</button>
          
                        )
                    }
                {/* <button className="my-3 p-3 btn-dark btn-lg" style={{width:"auto",fontSize:"15px",padding:"8px"}} onClick={()=>history.push("/login")} disabled={pro.stock === 0}><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart</button> */}
            </div>
        
                    {/* <div className="col-md-4 text-center">
                    <span className="monospaced">In Stock</span>
                    </div>
                    <div className="col-md-4 col-md-offset-1 text-center">
                    <a className="monospaced" href="#">Add to Shopping List</a>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 bottom-rule top-10"></div> */}
                    </div>

                    <div className="row">
                    <div className="col-md-7 top-10">
                    <strong>To order by telephone, <a href="tel:18005551212">please call 1-800-555-1212</a></strong>
                    </div>
                    </div>
                    <span className="btn btn-default btn-lg btn-qty">
 <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
</span>

                </div>
            
                {/* <div className="mx-5 col-3">
                    <h4 className="">{pro.name}</h4>
                    
                    <h4 className="my-2">{pro.price}</h4>
                    <ul className="dashboard col-6">
                  <li><i className="fa fa-star " aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                    <details>
                        <summary style={{fontSize:"20px"}}>Product detail</summary>
                        <h6 className="m-2 description" >{pro.description}</h6>
                    </details>
                </div>
                <div className="row" style={{float:"right",display:"flex",marginTop:"-32% ",marginRight:"15%"}} >
                <div className="m-7 col-11 stock_details" >
                
                    <div className="my-3">{pro.stock === 0 ?<h2 style={{backgroundColor:"red",color:"black",padding:'8px',borderRadius:"5px"}}>Out Of Stock</h2>:<h2 style={{backgroundColor:"gray",color:"black",padding:'8px',borderRadius:"5px"}}>In Stock</h2>}</div>
                        <div className="my-3"><select style={{width:'50%',padding:'5px',borderRadius:"5px"}}>
                            <optgroup label="Qtantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            </optgroup> 
                        </select> </div>
                    <button className="my-3 p-3 btn-secondary btn-lg" style={{width:"auto",fontSize:"22px",padding:"8px"}} onClick={()=>history.push("/login")} disabled={pro.stock === 0}><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart</button>
                </div>
            </div> */}
            </div>
</div>

        </div>
    )
}

export default Calamine
