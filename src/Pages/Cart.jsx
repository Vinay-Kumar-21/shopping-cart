import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Store/cartSlice'

function Cart() {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    function handleRemoveFromCart(itemId) {
        dispatch(removeFromCart(itemId));
    }
    return (
        <div className='cartWrapper'>
            {items.map((item) => {
                return <div className='cartCard'>
                    <img src={item.image} alt='cartimg' />
                    <h5>{item.title}</h5>
                    <h5>Price:${item.price}</h5>
                    <button className='remove-btn' onClick={() => handleRemoveFromCart(item.id)}>Remove From Cart</button>
                </div>
            })}
        </div>
    )
}

export default Cart
