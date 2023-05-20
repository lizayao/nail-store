import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id, name, price
        }
        addItem(item, quantity)
    }
    return (
        <article className="card card-body d-flex justify-content-between align-items-center" /* style={{ margin: 40, padding: 20, width: 300, height: 400 }} */>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} height={200}/>
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripcion: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer>
                {quantityAdded > 0 ? (
                    <button><Link to='/cart'>Terminar compra</Link></button>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />      
                )}
            </footer>
            <button type="button" class="btn btn-outline-primary" style={{color: 'white'}}><Link to={`/`}>Volver</Link></button>
        </article>
    )
}

export default ItemDetail;

{/* <button type="button" className="btn btn-primary mt-3">Agregar al carrito</button> */}