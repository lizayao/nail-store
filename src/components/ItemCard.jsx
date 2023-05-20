import React from "react";
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="card card-body d-flex justify-content-between align-items-center" >
            <img src={img} alt={name} height={200} />
            <h5 className="card-title">{name}</h5>
            <p>Precio: ${price}</p>
            <p>Stock disponible: {stock}</p>
            <Link to={`/item/${id}`} className="btn btn-outline-warning">Ver detalle</Link>
        </div>
    )
}

export default Item;