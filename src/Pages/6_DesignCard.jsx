import React from 'react';
import '../Assets/css/6_DesignCard.css'
const DesignCard = () => {
   let MyName="Md Eyaisn ALi"
   let myAge="25"
   let Details="I am pursing a Diploma in Electrical Engineering and Learning MERN devlopment"
   return (
   
      <div className='card'>
      <div className="card-title">{MyName}</div>
      <div className="des">{myAge}</div>
      <div className="footer">{Details}</div>
   </div>
  
   );
};

export default DesignCard;