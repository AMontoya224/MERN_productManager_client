import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Details.css';


export default props => {
    const [product, setProduct] = useState( {} );
    let isCancelled = false;

    useEffect( () => {
        isCancelled = false;
        axios.get( 'http://localhost:8000/api/products/' + props.match.params._id )
            .then( res => {
                if (!isCancelled) {
                    setProduct( {...res.data} )
                }
            });
            return () => {
                isCancelled = true;
              };
    }, [] );

    return (
        <div className='details'>
            <h1>
                {product.title}
            </h1>
            <div className='row'>
                <span className="material-icons-outlined">add_photo_alternate</span>
                <div>
                    <p>
                        <b>Price:</b> $ {product.price}
                    </p>
                    <p>
                        <b>Description:</b> <i>"{product.description}"</i>.
                    </p>
                    <Link to={`/` + product._id + `/edit`} className='submit-link' >
                        <div className='submit'>
                            Edit
                        </div>
                    </Link>
                </div>
            </div>
            <Link  to={`/`} className='submit-link'>
                <div className='delete'>
                    Back to home
                </div>
            </Link>
        </div>
    );
};