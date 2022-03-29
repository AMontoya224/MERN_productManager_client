import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'


export default props => {
    const { removeFromDom } = props;

    const deletePerson = ( productID ) => {
        axios.delete( 'http://localhost:8000/api/' + productID + '/delete' )
            .then( () => {
                removeFromDom( productID )
            } )
    };

    return (
        <div className='productList'>
            {props.products.map( (product, idx)=>{
                return(
                    <div  key={idx} className='product'>
                        <Link className='product-link' to={`/products/${product._id}`}>
                            <h2>
                                {product.title}
                            </h2>
                            <span className="material-icons-outlined">add_photo_alternate</span>
                            <p>
                                $ {product.price}
                            </p>
                        </Link>
                        <button className='delete' onClick={ ()=>{deletePerson( product._id )}}>
                            Delete
                        </button>
                    </div>
                )
            } )}
        </div>
    )
}