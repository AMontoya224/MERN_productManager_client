import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'


export default props => {
    return (
        <div className='productList'>
            {props.products.map( (product, idx)=>{
                return(
                    <Link key={idx} className='product' to={`/products/${product._id}`}>
                        <h2>
                            {product.title}
                        </h2>
                        <span class="material-icons-outlined">add_photo_alternate</span>
                        <p>
                            $ {product.price}
                        </p>
                    </Link>
                )
            } )}
        </div>
    )
}