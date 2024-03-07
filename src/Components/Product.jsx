import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/cartSlice';
import { fetchProducts } from '../Store/productSlice';

function Product() {
    const { data, status } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    function handleAddToCart(product) {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if (status == 'loading') {
        return (
            <h2>....Loading</h2>
        )
    } else if (status == 'error') {
        return (
            <h2>OOPs, Something went wrong...</h2>
        )
    }

    return (
        <div className='productsWrapper'>
            {data.map((product) => {
                return <div className="card">
                    <img src={product.image} alt="product" />
                    <h6>{product.title}</h6>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAddToCart(product)} className="btn"> Add to Cart</button>
                </div>
            })}

        </div>
    )
}

export default Product
