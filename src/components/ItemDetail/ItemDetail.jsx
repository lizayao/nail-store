import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, category, description, price, stock}) => {
    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img alt={name} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripcion: {description}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada",)} />
            </footer>
        </article>
    )
}



export default ItemDetail;