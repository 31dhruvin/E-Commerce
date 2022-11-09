import React from "react";
import Data1 from './product.json'
import { BrowserRouter as Router,useHistory,Link } from 'react-router-dom'
import './dashboard.css'
import '../Style/style.css'

const DiffProd = () => {
    return(
        <>
        <div class="product-section">
			<div class="container">
				<div class="row">
        {/* <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title one">Manufactured with excellent material.</h2>
						<p class="mb-4">We are into the business of I.P., B.P. and U.S.P products having 6 different categories and 50+ products.</p>
						<p><a href="shop.html" class="btn">Explore</a></p>
					</div>  */}


			
      {Data1.map((items,index)=>(
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-4">
						<Link to={`/product/${items.name}`} class="product-item">
            {/* <Link to={`/product/${items.name}`}></Link> */}
							<img src={items.image} class="img-fluid product-thumbnail" />
							<h3 class="product-title">{items.name}</h3>
              <br />
							<strong class="product-price">₹ {items.price}</strong>
              
							<span class="icon-cross" >
              <i class="fa-thin fa-plus"></i>
              
							</span>
						</Link>
					</div> 
      ))}

				</div>
			</div>
		</div>
        </>

    )
}
export default DiffProd;