import React from 'react'
import {useParams} from 'react-router-dom'  
import Data from './product.json'
import './product'
const Calamine = () =>  {
    const {id} = useParams();
    return (
        <>
        {/* <div className="container">
            <div className="card">
                {Data.filter((card) => card.id === id).map((card,index) =>(
                    <div className="card shadow" key={index}>
                    
                   <div className="contentBx">
                       <div className="imgBx">
                    <img src="https://assets.codepen.io/4164355/shoes.png" />
                  </div>
                   <h6>{card.name}</h6>
                   <p>{card.description}</p>
                   
                   </div>
                   </div>

                ))}
        </div>
        </div> */}
               </>
    )
}

export default Calamine
