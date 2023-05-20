import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos seleccionados</h1>
                <Link to='/'>Volver</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: $ {total}</h3>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart;