import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ItemButtonsComponent = ({showDelete,showInfo,removeThisItem,idProduct}) => {
  return (
    <Fragment>
      {showDelete ? (
        <button className="btn btn-danger btn-sm" onClick={removeThisItem}>
          Eliminar producto
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink to={`/products/detail/${idProduct}`}>
          <button className="btn btn-warning">Ver más</button>
        </NavLink>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ItemButtonsComponent;
