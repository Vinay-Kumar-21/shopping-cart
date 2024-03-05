import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Product() {
    const [products, setProducts] = useState([]);

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
                    <button className="btn"> Add to Cart</button>
                </div>
            })}

        </div>
    )
}

export default Product
