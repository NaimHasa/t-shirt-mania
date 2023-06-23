import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts);

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        // console.log(tshirt)
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            alert('Product Already added')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart);
            // alert('New Product Added');
        }


    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>

                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}

                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Home;