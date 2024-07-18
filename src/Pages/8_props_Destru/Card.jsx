import React from 'react';
import './card.css'
const Card = (props) => {
  const {name,des}=props
   return (
     <div className="card">
       <img src="../../Assets/img/eyasin.jpg" alt="" className='card-img-top'/>
       <div className="card-body">
         <h5 className="card-title">{props.name}</h5>
         <h6 className="card-subtitle mb-2 text-muted ">{props.des}</h6>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         b5
       </div>
     </div>
   )
}

export default Card;
/* 
.ca

*/