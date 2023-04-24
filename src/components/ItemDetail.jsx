import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <article className="card card-body d-flex justify-content-between align-items-center" style={{margin: 40, padding: 20, width: 300, height: 400}}>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
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
            <p><Link to={`/`}>Volver</Link></p>
        </article>
    )
}

export default ItemDetail;