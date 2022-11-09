import React, { useState } from 'react';
import { BrowserRouter as Router,useHistory,Link } from 'react-router-dom'
import './dashboard.css'
import '../Style/style.css'
import { Virtual } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import Data1 from './OurProduct.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Similar from './Similar.json'
// import Data from './product.json'
SwiperCore.use([Navigation]);
const Dashboard = () => {
  const history = useHistory()
  const onsubmit = (e) =>{
    e.preventDefault()
  }
  
    return (
        <div className="main">
            {/* <section>

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-vector/online-pharmacy-service_107791-2650.jpg?size=626&ext=jpg&ga=GA1.2.1646031593.1659596900" class="d-block w-50" alt="..."   />
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/pharmacists-holding-bottles-with-antibiotic-pills-vitamins-drugs-thermometer-ointment-tube-vector-illustration-drugstore-medical-store-pharmacy-pharmaceutical-business-concept_74855-10132.jpg?size=626&ext=jpg&ga=GA1.2.1646031593.1659596900" class="d-block w-50" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://galentic.com/wp-content/uploads/2019/09/about-galentic-pharma.png" class="d-block w-50" alt="..." />
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section> */}
          

{/* 
<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

			<div class="container">
				<a class="navbar-brand" href="index.html">Furni<span>.</span></a>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarsFurni">
					<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li class="nav-item active">
							<a class="nav-link" href="index.html">Home</a>
						</li>
						<li><a class="nav-link" href="shop.html">Shop</a></li>
						<li><a class="nav-link" href="about.html">About us</a></li>
						<li><a class="nav-link" href="services.html">Services</a></li>
						<li><a class="nav-link" href="blog.html">Blog</a></li>
						<li><a class="nav-link" href="contact.html">Contact us</a></li>
					</ul> */}

					{/* <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><i class="fa-solid fa-user"></i></li>
						<li><a class="nav-link" href="cart.html"><img src="E:\Summer\jcw\src\images\cart.svg" /></a></li> 
					</ul> */}
				{/* </div>
			</div>
				
		</nav> */}
		{/* <!-- End Header/Navigation -->

		<!-- Start Hero Section --> */}
			 <div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
              
 
  <div class="text-block">
  <h1 class="section-title one">Welcome to <span class="d-block three">jcw pharma</span></h1>
  <p class="mb-4">EFFECTIVE MEDICINE, NEW MEDICINE EVERYDAY</p>
  </div>

              <h2 class="section-title one">Welcome to <span class="d-block three">jcw pharma</span></h2>
								
								
								<p><a href="#" class="btn btn-white-outline"></a></p>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
							
							</div> 
						</div>
					</div>
				</div>
			</div>


     
		<div class="why-choose-section">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-6">
						<h2 class="section-title one">Who are we</h2>
						<p className="hello">Jcw is leading manufacturer of Industrial chemical, Pharmaceutical chemical and Processing chemical with all kinds of I.P., B.P. and U.S.P products.</p>

						<div class="row my-5">
							<div class="col-6 col-md-6">
								<div class="feature">
									
									<h3>Fast &amp; Free Shipping</h3>
									<p>Fast and Free delivery to your doorstep</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									
									<h3>Easy to Shop</h3>
									<p>One of the easiest way to buy.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									
									<h3>24/7 Support</h3>
									<p>24/7 customer care support</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									
									<h3>Hassle Free Returns</h3>
									<p>Free returns from your doorstep.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src="https://images.unsplash.com/photo-1608037222022-62649819f8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGV4cGVyaW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Image" />
						</div>
					</div>

				</div>
			</div>
		</div>
{/* Start of feature section */}
      {/* <section className="features review" id="features">

<h1 className="heading"> our <span>features</span> </h1>

<div className="box-container">

    <div className="box" style={{height:"75%"}}>
    <i class="fas fa-air-freshener"></i>
        <h3>real and organic</h3>
        <p>100% real and lab tested products</p>
        
    </div>

    <div className="box"style={{height:"75%"}}>
    <i class="fas fa-air-freshener"></i>
        <h3>free delivery</h3>
        <p>No delivery charges</p>
        
    </div>

    <div className="box"style={{height:"75%"}}>
    <i class="fas fa-air-freshener"></i>
        <h3>easy payments</h3>
        <p>One of the easiest way to make online payments</p>
        
    </div>

</div>

</section> */}

{/* Start of Product section */}
{/* <h1 className="heading"> our <span>products</span> </h1> */}
      <div class="product-section">
			<div class="container">
				<div class="row">
        <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title one">Manufactured with excellent material.</h2>
						<p class="mb-4">We are into the business of I.P., B.P. and U.S.P products having 6 different categories and 50+ products.</p>
						<p><a href="shop.html" class="btn">Explore</a></p>
					</div> 


			
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

            <hr />


            {/* <!-- Start Why Choose Us Section --> */}
            <div class="bg-even">
    <div class="container">
        <div class="text-center">
        <h2 class="section-title two mb-5">Why choose us</h2>
        </div>
        <div class="row ">
            
            <div class="col-lg-3 text-center text-primary mb-4">
                <i class="fa fa-users fa-4x"></i><h4>70+</h4><h6>Years Of Experience </h6>
            </div> 
            <div class="col-lg-3 text-center text-primary mb-4">
                <span class="fa-stack fa-lg">
                    <i class="fa fa-certificate fa-stack-2x"></i>
                    <i class="fa fa-check-circle fa-stack-1x text-white"></i>
                </span>
                <h4>50 +</h4><h6>Products</h6>
            </div>
            <div class="col-lg-3 text-center text-primary mb-4">
                <i class="fa fa-map-marker fa-4x"></i><h4>100+</h4><h6> Clients </h6>
            </div>
            <div class="col-lg-3 text-center text-primary mb-4">
                <i class="fa fa-phone fa-4x"></i><h4>24/7</h4><h6>Support</h6>
            </div>
            <div class="col-lg-3 text-center text-primary mb-4">
                <i class="fa fa-truck-fast fa-4x"></i><h4></h4><h6>Fast Delivery</h6>
            </div>
            <div class="col-lg-3 text-center text-primary mb-4">
                <i class="fa fa-tag fa-4x"></i><h4></h4><h6>Free Shipping</h6>
            </div>
            <div class="col-lg-3 text-center text-primary mb-4">
                <i class="fa fa-shop fa-4x"></i><h4></h4><h6>Easy to Shop</h6>
            </div>
            
            <div class="col-lg-3 text-center text-primary mb-4">
                <i class="fa fa-arrow-right-arrow-left fa-4x"></i><h4></h4><h6>Hassle Free Returns</h6>
            </div>

        </div>
    </div>
</div>







		
             <hr /> 
{/* Start of customer reviews */}
{/* 
<section className="products" id="products">
<h4 className="heading"> customer's <span>review</span> </h4>
<div class="pro-container">
<Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 20,
          width: 320
        },
        480:{
          slidesPerView: 2,
          spaceBetween: 200
        },
        640: {
          
          slidesPerView: 2,
          spaceBetween: 50
        },
        
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1024:{
          width:1024,
          slidesPerView: 3

        }
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>





      
  <div className="card">
    
    
    <div className="card-body">
      
    
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div> 
   
</SwiperSlide>
      <SwiperSlide>
        <div className="card">
    
    <div className="card-body">
      
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div> 
   
  </SwiperSlide>
      <SwiperSlide>
        <div className="card">
   
    <div className="card-body">
      
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div> 
   
  </SwiperSlide>
      <SwiperSlide>
        <div className="card">
    
    <div className="card-body">
      
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
   
  </SwiperSlide>
    </Swiper>
</div>
</section>
<hr /> */}




<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3> jcw <i className="fas fa-shopping-basket"></i> </h3>
            
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +111-222-3333 </a>
            <a href="#" className="links"> <i className="fas fa-envelope"></i> dhruvin@gmail.com </a>
            <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> bhavnagar, india - 364002 </a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i> features </a>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i> products </a>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i> categories </a>
           
        </div>
    </div>
</section> 


      
        </div> 
    )
}

export default Dashboard
