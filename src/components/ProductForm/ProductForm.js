import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';


export default () => {
    const [title, setTitle] = useState( '' ); 
    const [price, setPrice] = useState( '' );
    const [description, setDescription] = useState( '' );
    const [titleError, setTitleError] = useState( '' ); 
    const [priceError, setPriceError] = useState( '' );
    const [descriptionError, setDescriptionError] = useState( '' );

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post( 'http://localhost:8000/api/new', {
            title,
            price,
            description
        })
            .then( res => {
                console.log( res );
                setTitle( '' );
                setPrice( '' );
                setDescription( '' );
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
        <form onSubmit={onSubmitHandler}>
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
        </form>
    );
};