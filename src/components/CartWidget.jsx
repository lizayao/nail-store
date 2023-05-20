import React from "react";
import cart from "../assets/icons/cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={cart} alt="cart-widget" height={20} />
            {totalQuantity}
        </Link>
        
    )
}

export default CartWidget;