import React from 'react';
import './index.css'
const Assignment_1 = ({products}) => {
   console.log(products)
   return (
      <div>
      {products.map((product,index)=>{
           return(
            <article className="product" key={index}>
            <img src={product.image} rounded alt={product.title}/>
            <div className="product__details">
              <h4 className="product__title">{product.title}</h4>
              <p className=' .product__price'>Price: {product.price}</p>
              <p className='product__rating'>Rating: {product.rating.rate}/{product.rating.count} </p>
              <p className="product__desc">Description: {product.description}</p>
              <button className="product__btn btn">Add to cart</button>
            </div>
          </article>
           )
       
      })
     }
      
      </div>

   );
};

export default Assignment_1;