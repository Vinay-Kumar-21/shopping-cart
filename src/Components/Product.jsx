import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/cartSlice';

function Product() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    function handleAddToCart(product) {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            //console.log(res);
            setProducts(res.data);
        })
    }, [])

    return (
        <div className='productsWrapper'>
            {products.map((product) => {
                return <div className="card">
                    <img src={product.image} alt="product" />
                    <h6>{product.title}</h6>
                    <h5>{product.price}</h5>
                    <button className="btn" onClick={() => handleAddToCart(product)}> Add to Cart</button>
                </div>
            })}

        </div>
    )
}

export default Product
