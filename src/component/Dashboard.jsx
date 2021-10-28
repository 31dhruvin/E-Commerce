import React, { useState } from 'react';
import { BrowserRouter as Router,useHistory,Link } from 'react-router-dom'
import './dashboard.css'
import Data from './product.json'

const Dashboard = () => {
  const history = useHistory()
  const[datas]=useState([
    {title: "Category 1",image:"",id: 1},
    {title: "Category 2",image:"",id: 2},
    {title: "Category 3",image:"",id: 3},
    {title: "Category 4",image:"",id: 4},
    {title: "Category 5",image:"",id: 5},
    {title: "Category 6",image:"",id: 6},
    {title: "Category 7",image:"",id: 6},

    {title: "Category 8",image:"",id: 6},
    {title: "Category 9",image:"",id: 6},

    {title: "Category 10",image:"",id: 6},

  ])
  const onsubmit = (e) =>{
    e.preventDefault()
  }
    return (
        <div className="main">
            <section>
            
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/images/brand1.png" className="d-block w-50 h-1000" alt="..." style={{height:"50%"}} />
    </div>
    <div className="carousel-item">
      <img src="/images/images/brand1.png" className="d-block w-50 h-1000" alt="..."  style={{height:"50%"}}/>
    </div>
    <div className="carousel-item">
      <img src="/images/images/brand1.png" className="d-block w-50 h-1000" alt="..." style={{height:"50%"}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </section>
            <hr />
            
            <div className="category">
            <div className="row">
            {datas.map((data) => (
            <div className="card" id="card1">
    <div className="card_img"> 
        <img src={data.image} alt="user-image" />
    </div>
    <div className="card_info">
      <Link to="/category:name">
        <h6 style={{color:"black"}}>{data.title}</h6>
        </Link>
    </div>
</div>
            ))}
</div>
</div>
          <div className="gallery">
           
              {Data.map((items,index)=>(
                <div className="content">
               <Link to={`/product/${items.name}`} style={{color:"black"}}>
                      <img src={items.image} />
                </Link>    
                <h6>{items.name}</h6>
                <p className="home_des">{items.description}</p>
                <h6>{items.price}</h6>
                <ul className="dashboard">
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                  <li><i className="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <button className="know"><Link to={`/product/${items.name}`} style={{color:"black"}}>Buy Now</Link></button>
              </div>
              ))}
              </div>
      
        </div>
    )
}

export default Dashboard
