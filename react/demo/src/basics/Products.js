import React from 'react'
import PropTypes from 'prop-types';

export default function Products() {
  let products = [
     {id : 1, name : 'Product1', price: 390393},
     {id : 2, name : 'Product2', price: 6993},
     {id : 3, name : 'Product3', price: 68777}
]
  return (
     <>
       <h1>Products</h1>
       {
         products.map( p => <ProductDetails
                               key={p.id}
                               pname = {p.name} 
                               price = {p.price}  />)
       }
     </>
  )
}

function ProductDetails({pname, price}) {
     // calculate price after discount 
     function getFinalPrice() {
           if(price > 10000)
              return price * 0.80;
           else
              return price * 0.90;
     }

     return (
        <>
          <h2>Name : {pname}</h2>
          <h3>Price : {price}</h3>
          <h3>After Discount : {getFinalPrice()}</h3>
          <hr />
        </>
     )
}

// Properties validation using PropTypes 

ProductDetails.propTypes =  {
     pname : PropTypes.string.isRequired,
     price : PropTypes.number.isRequired,
}