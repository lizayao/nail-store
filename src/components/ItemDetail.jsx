import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({id, name, category, description, price, stock}) => {
    return(
        <article className="card card-body" style={{margin: 40, padding: 20, width: 300, height: 400}}>
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada")} /><br/>
                <button type="button" className="btn btn-primary mt-3">Agregar al carrito</button>
            </footer>
        </article>
    )
}

export default ItemDetail;