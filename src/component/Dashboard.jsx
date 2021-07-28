import React, { useState } from 'react';
import { BrowserRouter as Router,NavLink,useHistory,Link } from 'react-router-dom'
import './dashboard.css'
import Data from './product.json'

const Dashboard = () => {
  const history = useHistory()
  const[datas,setDatas]=useState([
    {title: "Category 1",image:"https://rasoithigujaratirecipes.in/wp-content/uploads/2017/03/Bhugda-Bateta-Recipe-Photo..jpg",id: 1},
    {title: "Category 2",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 2},
    {title: "Category 3",image:"https://rasoithigujaratirecipes.in/wp-content/uploads/2017/03/Bhugda-Bateta-Recipe-Photo..jpg",id: 3},
    {title: "Category 4",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 4},
    {title: "Category 5",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 5},
    {title: "Category 6",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 6},
    {title: "Category 7",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 6},

    {title: "Category 8",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 6},
    {title: "Category 9",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 6},

    {title: "Category 10",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",id: 6},

  ])
  const onsubmit = (e) =>{
    e.preventDefault()
  }
    return (
        <div className="main">
            <section>
            
                <h3>Carousel</h3>
            </section>
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
                <p>{items.description}</p>
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
