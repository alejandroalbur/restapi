import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/login/index";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState('products');

    const [products] = useState([
        {
            name: 'Shiny Object',
            cost: '$499.99',
            image: 'https://fxfactory.com/downloads/docs/noiseindustries/fxfactorypro/Thumbnails/Star%20Shine.jpg',
        },
        {
            name: 'Gamer Tears',
            cost: '$0.99',
            image: 'https://i.pinimg.com/originals/17/64/4d/17644d0b77b31de2d222371564f29850.jpg',
        },
        {
            name: 'The Declaration of Independence',
            cost: '$A Nicolas Cage',
            image: 'https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180628174143-02-declaration-of-independence-1776.jpg',
        }
    ]);

    const addToCart = (product) => {
        console.log('we are in addtocart');
        setCart([...cart, {...product}]);
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove))
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProducts = () =>
        <>
            <h2>Products</h2>
            <div className="products">
                {products.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>{product.cost}</h4>
                        <img src={product.image} alt={product.name}/>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>

    const renderCart = () =>
        <>
            <h2>Cart</h2>
            <div className="products">
                {cart.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>{product.cost}</h4>
                        <img src={product.image} alt={product.name}/>
                        <button onClick={() => removeFromCart(product)}>Remove
                        </button>
                        {/*<button onClick={() => addToCart(product)}>Add to Cart</button>*/}
                    </div>
                ))}
            </div>
        </>

    return (
        <div className="App">
            <Login/>
            <header>
                <button onClick={() => navigateTo(PAGE_CART)}>Go To Cart ({cart.length})</button>
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}>Go Back to Store
                </button>
            </header>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
        </div>
    );
}

export default App;
