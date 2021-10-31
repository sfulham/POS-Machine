import React from 'react'
import { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Product from './product.jsx'


function Main()
{
    const [cart, setCart] = useState([
        {
            id: 0,
            quantity: 1,
        },
        {
            id: 1,
            quantity: 1,
        }
    ]);

    const [products, setProducts] = useState([
        {
            name: "Test",
            price: "100"
        },
        {
            name: "Testa",
            price: "1000"
        }
    ]);

    const [productsa, setProductsa] = useState([]);

    const [showReaders, setShowReaders] = useState(false);

    useEffect(() => {
        var productsatemp = [];
        for(var item of products)
        {
            productsatemp.push(<Product item={item} key={item.name}/>)
        }
        setProductsa(productsatemp);
    }, [cart])
    
    return (
        <>
            <div className="main">
                <div className="sidebar">
                    <a href="./main_window"><FontAwesomeIcon icon={faShoppingCart} className="sidebar_icon"/></a>
                </div>
                <div className="products">
                    {productsa}
                </div>
                <div className={`readers${showReaders == true ? " show" : " hide"}`}>

                </div>
                <div className="cart">

                </div>
            </div>
        </>
    )
}

export default Main;