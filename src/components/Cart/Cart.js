import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props)
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.retail_price, 0);
    const vat = total/10;
    return (
        <div className='cart'>
            <h3>Add to Cart</h3>
            <p>Items: {cart.length}</p>
            <p>Price: ${total}</p>
            <p>Vat: ${vat}</p>
            <p>Total Price: ${total + vat}</p>
            <button>Confirm Order</button>
        </div>
    );
};

export default Cart;