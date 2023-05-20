import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-outline-primary" onClick={decrement}>-</button>
            <button type="button" className="btn btn-outline-primary" style={{ color: "black" }} disabled>{quantity}</button>
            <button type="button" className="btn btn-outline-primary" onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount;
