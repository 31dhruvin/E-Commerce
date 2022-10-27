import React, { useState } from 'react';
import { BrowserRouter as Router,useHistory,Link } from 'react-router-dom'
import './dashboard.css'
import { Virtual } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import Data1 from './OurProduct.json'
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
            <section>
            
            {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/online-pharmacy-service_107791-2650.jpg?size=626&ext=jpg&ga=GA1.2.1646031593.1659596900" className="d-block" alt="..."style={{height:"430px",width:"500px"}}  />
    </div>
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/pharmacists-holding-bottles-with-antibiotic-pills-vitamins-drugs-thermometer-ointment-tube-vector-illustration-drugstore-medical-store-pharmacy-pharmaceutical-business-concept_74855-10132.jpg?size=626&ext=jpg&ga=GA1.2.1646031593.1659596900" className="d-block"alt="..." style={{height:"430px",width:"500px"}} />
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only" >Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only" >Next</span>
  </button>
</div> */}

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-vector/online-pharmacy-service_107791-2650.jpg?size=626&ext=jpg&ga=GA1.2.1646031593.1659596900" class="d-block w-50" alt="..."   />
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/pharmacists-holding-bottles-with-antibiotic-pills-vitamins-drugs-thermometer-ointment-tube-vector-illustration-drugstore-medical-store-pharmacy-pharmaceutical-business-concept_74855-10132.jpg?size=626&ext=jpg&ga=GA1.2.1646031593.1659596900" class="d-block w-50" alt="..." />
    </div>
    {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div> */}
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
            </section>
            <hr />
              <section className="features review" id="features">

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

</section>
<section className="features" id="features">
<h1 className="heading"> our <span>Products</span> </h1>
{/* <Swiper
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
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          width: 640,
          slidesPerView: 3,
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
    > */}
          <div className="box-container" >
          
      
              {Data1.map((items,index)=>(
                // <SwiperSlide>
                <div className="box" >
                  
               <Link to={`/product/${items.name}`} style={{color:"black"}}>
                      <img src={items.image} style={{height:"10rem"}} />
                </Link>    
                <h6 style={{textAlign:"center"}}>{items.name}</h6>
                
                
                <h6 style={{marginTop:"5%",textAlign:"center"}}>{items.price}</h6>
                <button className="btn1" ><Link to={`/product/${items.name}`}>Buy Now</Link></button>
                
              </div>
              // </SwiperSlide>
              ))}
              
              </div>
              {/* </Swiper> */}
              </section>
            
<section className="products" id="products">
<h1 className="heading"> customer's <span>review</span> </h1>
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
    
    <div className="card-header">
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="rover" />
    </div>
    <div className="card-body">
      
    
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="user">
      <a href="#" className="btn">read more</a>
      </div>
    </div>
  </div>
</SwiperSlide>
      <SwiperSlide><div className="card">
    <div className="card-header">
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="rover" />
    </div>
    <div className="card-body">
      
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="user">
      <a href="#" className="btn">read more</a>
      </div>
    </div>
  </div></SwiperSlide>
      <SwiperSlide><div className="card">
    <div className="card-header">
      <img width={25} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="rover" />
    </div>
    <div className="card-body">
      
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="user">
      <a href="#" className="btn">read more</a>
      </div>
    </div>
  </div></SwiperSlide>
      <SwiperSlide><div className="card">
    <div className="card-header">
      <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="rover" />
    </div>
    <div className="card-body">
      
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className="user">
      <a href="#" className="btn">read more</a>
      </div>
    </div>
  </div></SwiperSlide>
    </Swiper>
</div>
</section>
<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3> jcw <i className="fas fa-shopping-basket"></i> </h3>
            
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
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
