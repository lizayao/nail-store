import React from "react";
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="card card-body" style={{}}>
            <img src={img} class="card-img-top" alt={name} />
            <h5 className="card-title">{name}</h5>
            <p>Precio: ${price}</p>
            <p>Stock disponible: {stock}</p>
            <Link to={`/item/${id}`} className="btn btn-outline-warning">Ver detalle</Link>
        </div>
    )
}

export default Item;


{/* <article>
<header>
    <h2>
        {name}
    </h2>
</header>
<picture>
    <img src={img} alt={name} />
</picture>
<section>
    <p>Precio: ${price}</p>
    <p>Stock disponible: {stock}</p>
</section>
<footer>
    <Link to={`/item/${id}`}>Ver detalle</Link>
</footer>
</article> */}