import React from "react";
import cart from "./assets/cart.svg"

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" height={20}></img>
            0    
        </div>
    )
}

export default CartWidget;