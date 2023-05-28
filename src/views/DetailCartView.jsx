import React, { Fragment, useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import ItemComponent from "../components/ItemComponent";
import BuyComponent from "../components/BuyComponent";

const DetailCartView = () => {
  const { cart } = useContext(GeneralContext);

  return (
    <Fragment>
      <div className="container mt-5">
        <BuyComponent />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cart.map((item, index) => (
            <div key={index} className="col">
              <ItemComponent showDelete data={item} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DetailCartView;
