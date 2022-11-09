import React, { useContext,useState } from 'react';
import data from './product.json'
import './product'
import './dashboard.scss'
import UserStore from "../Store";
import { BrowserRouter as Router,useHistory,Link } from 'react-router-dom'
import { CartContext } from './Cartcontext';
import Data2 from './Similar.json'
const Calamine = ({match,history}) =>  {
    const [shown,setShown] = useState(false);
    const {dispatch} = useContext(CartContext)
    const { userData, setUserData } = useContext(UserStore);useState({
        auth:false,
      });
    // console.log(match)
    // console.log(match.params.name)

    const pro = data.find(card=>card.name === match.params.name)
    // console.log(pro)
    const shownClick = event =>{
        setShown(current => !current)
    }
    return (
        <>
        {/* <div style={{overflowX:"hidden"}}> 
        
            
                <div className="row md-3">
                <div className="col-md-4">
                <img src={pro.image} alt=" " className="single-image" style={{height:"350px", width:"300px",marginTop:"3%"}}/>
                </div>
                
                <div className="col-md-5" style={{marginTop:"2%"}}>                   
                        <h4 className="calamine_name" style={{textAlign:"left"}}><u>{pro.name}</u></h4>
                    <div class="row">
                        
                        
                        <h6 className="calamine_des">Hello</h6>

                        </div>
                        <hr />
                    
                    <div className="row">
                    <a href="#text-menu" className="btn btn-outline-dark shadow-none" style={{width:"200px",marginLeft:"2.5%"}} aria-current="page">4.5<i class="fas fa-star" style={{color:"orange"}}></i>|121 Ratings</a>

                    <h4 className="product-price" style={{marginTop:"3%"}}>Rs. {pro.price}</h4>
                    <span style={{color:"green", margintop:"-5%"}}>inclusive of all taxes</span>
                    </div>
                    

                    <div className="row">
                        
                    <div className="stock_details" >
                
                
                    {
                        userData.auth ? (
                            <button className="my-3 p-3 btn-dark btn-lg"  onClick={()=> {dispatch({type:'ADD to Cart',name:pro.name, pro})}} disabled={pro.stock === 0}><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart</button>
                        ):(
                            <button className="my-3 p-3 btn-dark btn-lg"  onClick={()=>history.push("/login")} disabled={pro.stock === 0}><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart</button>
          
                        )
                    }
                {/* <button className="my-3 p-3 btn-dark btn-lg"  onClick={()=>history.push("/login")} disabled={pro.stock === 0}><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart</button> */}
            {/* </div>
        
    
                    </div>

                    <div className="row">
                    
                    <strong>To order by telephone, <a href="tel:18005551212">please call 1-800-555-1212</a></strong>
                    </div>
                    
                    

                </div> */}
            {/* <div className="col md-3"style={{marginTop:"2.57%"}}>
            <h4 className="calamine_name" style={{textAlign:"left"}}>Delivery</h4>
            <h6 className="calamine_des">Hello</h6>
            <hr />
                <div className="suggestion" style={{marginTop:"7%"}} >
                <span style={{fontSize:"15px"}}> <i class="fas fa-truck" style={{fontSize:"24px"}}></i> &nbsp;&nbsp; Get it within in a week</span>.
                <br />
                <span style={{fontSize:"15px"}}><i class="fas fa-wallet" style={{fontSize:"24px",marginTop:"7%"}}></i> &nbsp;&nbsp; Cash on delivery{" "}{" "}available</span>
                <br />
                <span style={{fontSize:"15px"}}><i class="fas fa-check-circle" style={{fontSize:"24px",marginTop:"7%"}}></i> &nbsp;&nbsp; 100% original products</span>
                </div>
            </div>
                
            </div>

            </div>
            <hr /> */} 
            
            {/* ------ */}
            <div class="why-choose-section mb-5">
			<div class="container">
				<div class="row justify-content-between">
                <div class="col-lg-5">
						<div class="img-wrap">
							<img src={pro.image} alt="Image" />
						</div>
					</div>
					<div class="col-lg-6">
						<h2 class="section-title one">{pro.name}</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                        
                        <div className="btn btn-outline-dark shadow-none" style={{width:"200px"}} aria-current="page">4.5<i class="fas fa-star" style={{color:"orange"}}></i>|121 Ratings</div>
                        <br />
						<h3 className='my-3'>Rs. {pro.price}</h3>
                        {
                        userData.auth ? (
                            <button className="btn btn-outline-dark shadow-none"  onClick={()=> {dispatch({type:'ADD to Cart',name:pro.name, pro})}} disabled={pro.stock === 0}><i class="fas fa-cart-shopping"></i>&nbsp;&nbsp;Add to Cart</button>
                        ):(
                            <button className="btn btn-outline-dark shadow-none"  onClick={()=>history.push("/login")} disabled={pro.stock === 0}><i class="fas fa-cart-shopping"></i>&nbsp;&nbsp;Add to Cart</button>
          
                        )
                    }


                      

						</div>
					</div>
                    {/* <section className="features review" id="features">

<div className="box-container">

    
    <button 
    className="btn btn-outline-dark shadow-none"
    onClick={shownClick} style={{width:"100%"}}
    
    >Description</button>
    {
        
        shown || (
            <div className="box">
            Hello
        </div>
        )
    }

     <button 
    className="btn btn-outline-dark shadow-none"
    onClick={shownClick} style={{width:"100%"}}
    >Manufacturer</button>
         <button 
    className="btn btn-outline-dark shadow-none"
    onClick={shownClick} style={{width:"100%"}}
    >Reviews</button>



</div>

</section>   */}
				</div>
			</div>
        
 
</>            

    )
}

export default Calamine
