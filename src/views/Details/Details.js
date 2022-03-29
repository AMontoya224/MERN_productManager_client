import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Details.css';


export default props => {
    const [product, setProduct] = useState( {} );
    useEffect( () => {
        axios.get( 'http://localhost:8000/api/products/' + props.match.params._id )
            .then( res => {
                setProduct( {...res.data} )
            })
    }, [] );

    return (
        <div className='details'>
            <h1>
                {product.title}
            </h1>
            <div className='row'>
                <span class="material-icons-outlined">add_photo_alternate</span>
                <div>
                    <p>
                        <b>Price:</b> $ {product.price}
                    </p>
                    <p>
                        <b>Description:</b> <i>"{product.description}"</i>.
                    </p>
                </div>
            </div>
            <Link to={`/`} className='link'>Back to home</Link>
        </div>
    );
};