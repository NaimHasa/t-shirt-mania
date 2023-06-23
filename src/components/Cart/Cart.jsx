import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Orders Summary</h1>
            <h5>Orders Quntity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id} >{tshirt.name}</p>)
            }
        </div>
    );
};

export default Cart;