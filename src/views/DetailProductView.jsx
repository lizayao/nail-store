import React, { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import useFirestore from "../utils/useFirestore";
import { NavLink } from "react-router-dom";
const nameCollection = "items";

const DetailProductView = () => {
  const { idProduct: documentId } = useParams();
  const { addToCart } = useContext(GeneralContext);
  const [data] = useFirestore({ nameCollection, documentId });
  const [amount, setAmount] = useState(1);
  const { name, image, description, price, category } = data;

  const addBtnAction = () => {
    addToCart(data);
    alert("Producto agregado al carrito");
  };

  return (
    <Fragment>
      <div className="row my-5">
        <div className="col-3 offset-md-3">
          <h3>
            <span>{category}</span>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-md-3">
          <div className="card mb-3 shadow-sm  py-2 px-5">
            <div className="row ">
              <div className="col-md-4">
                <img src={image} width={600} height={600} className="img-fluid rounded-start" alt={name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                    <p className="text-muted">$ {price}</p>
                  </p>
                  <p className="h6 my-5">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button disabled={amount === 1} onClick={() => setAmount(amount - 1)} className="btn btn-outline-primary">-</button>
                      <button type="button" className="btn btn-outline-primary" style={{ color: "black" }} disabled>{amount}</button>
                      <button onClick={() => setAmount(amount + 1)} className="btn btn-outline-primary">+</button>
                    </div>
                  </p>
                  <p><button onClick={addBtnAction} className="btn btn-primary">Agregar</button></p>
                  <button className="btn btn-light"><NavLink to="/">Volver</NavLink></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailProductView;
