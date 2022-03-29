import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css';
import ProductForm from '../../components/ProductForm/ProductForm';
import ProductList from '../../components/ProductList/ProductList';


export default () => {
    const [products, setProducts] = useState( [] );
    const [loaded, setLoaded] = useState( false );
    const [iconTheme, setIconTheme] = useState( false );
    const changeTheme = () => {
        document.body.classList.toggle( 'dark-theme-variables' );
        setIconTheme( !iconTheme );
    };

    useEffect( ()=>{
        axios.get( 'http://localhost:8000/api/products' )
            .then( res=>{
                setProducts( res.data );
                setLoaded( true );
            });
    },[products] );

    const removeFromDom = productId => {
        setProducts( products.filter( product => product._id !== productId ) );
    };

    return (
        <div className='Main'>
            <h1>
                Product Manager
            </h1>
            <span className='material-icons theme-toggler' onClick={changeTheme}>{iconTheme ? "light_mode" : "dark_mode"}</span>
            <ProductForm/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    );
};