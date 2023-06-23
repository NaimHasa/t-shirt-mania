import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;