import React, { useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemButtonsComponent from "./ItemButtonsComponent";

const ItemComponent = (props) => {
  const { data, showInfo, showDelete } = props;
  const { id: idProduct, name, title, image, description, price } = data;
  const { removeToCart } = useContext(GeneralContext);

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax ? value.substring(0, lengthMax).concat(" ...") : value;
  };

  const removeThisItem = () => {
    removeToCart(data);
  };

  return (
    <div className="card shadow-sm d-flex align-items-center">
      <img className="card-img-top"  src={image} alt="" />
      <h5 className="justify-content-center">{name}</h5>
      <div className="card-body">
        <p className="text-muted">{showShortValue(description)}</p>
        <p className="h6">Precio: $ {price}</p>
      </div>
      <h5>
        {showShortValue(title, 25)}
        <ItemButtonsComponent 
        showInfo={showInfo} 
        showDelete={showDelete} 
        idProduct={idProduct}
        removeThisItem={removeThisItem} />
      </h5>
    </div>
  );
};

export default ItemComponent;
