import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Orders Summary</h1>
            <h5>Orders Quntity: {cart.length}</h5>
        </div>
    );
};

export default Cart;