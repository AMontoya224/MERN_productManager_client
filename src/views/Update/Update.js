import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Update.css';


export default props  => {
    const _id = props.match.params.id;
    const [title, setTitle] = useState( '' ); 
    const [price, setPrice] = useState( '' );
    const [description, setDescription] = useState( '' );
    const [titleError, setTitleError] = useState( '' ); 
    const [priceError, setPriceError] = useState( '' );
    const [descriptionError, setDescriptionError] = useState( '' );

    useEffect(() => {
        axios.get( 'http://localhost:8000/api/products/' + _id )
            .then(res => {
                setTitle( res.data.title );
                setPrice( res.data.price );
                setDescription( res.data.description );
            })
    }, []);

    const onSubmitUpdate = e => {
        e.preventDefault();
        axios.put( 'http://localhost:8000/api/' + _id + '/edit', {
            title,
            price,
            description
        })
            .then( res => {
                console.log( res );
                setTitle( title );
                setPrice( price );
                setDescription( description );
                setTitleError( '' );
                setPriceError( '' );
                setDescriptionError( '' );
            })
            .catch( err => {
                console.log( err );
                setTitleError( err.response.data.errors.title.message );
                setPriceError( err.response.data.errors.price.message );
                setDescriptionError( err.response.data.errors.description.message );
            })
    };

    return (
        <div className='update'>
            <h1>
                Edit Product
            </h1>
            <form onSubmit={onSubmitUpdate}>
                <div className='inp-container'>
                    <label htmlFor='title' className='inp'>
                        <input type='text' id='title' className='inp-input' placeholder=' ' value={title} onChange = {e =>setTitle( e.target.value )} />
                        <span className='inp-label'>Title</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{titleError}</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='price' className='inp'>
                        <input type="number" step="0.01" id='price' className='inp-input' placeholder=' ' value={price} onChange = {e =>setPrice( e.target.value )} />
                        <span className='inp-label'>Price</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{priceError}</p>
                    </label>
                </div>
                <div className='inp-container'>
                    <label htmlFor='description' className='inp'>
                        <input type='text' id='description' className='inp-input' placeholder=' ' value={description} onChange = {e =>setDescription( e.target.value )} />
                        <span className='inp-label'>Description</span>
                        <span className='inp-focus'></span>
                        <p className='inp-error'>{descriptionError}</p>
                    </label>
                </div>
                <button type='submit' className='submit'>
                    Add
                </button>
                <Link  to={`/`} className='submit-link'>
                    <div className='delete'>
                        Back to home
                    </div>
                </Link>
            </form>
        </div>
    );
};