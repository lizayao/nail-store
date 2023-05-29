import React, { Fragment, useContext, useMemo } from "react";
import GeneralContext from "../context/GeneralContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const collectionOrders = "orders";

const BuyComponent = () => {
  const { cart, cleanCart } = useContext(GeneralContext);
  const navigate = useNavigate();

  const _totalCompra = useMemo(() => {
    return cart.reduce((partialSum, item) => partialSum + item.price, 0);
  }, [cart]);

  const _order = useMemo(() => {
    const items = cart.map((item) => ({ item, amount: 1 }));
    const date = new Date().toLocaleDateString("es-MX");
    return { items, date };
  }, [cart]);

  const actionBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, collectionOrders);
    addDoc(orderCollection, _order).then(({ id }) => {
      alert(`Código de orden de compra: ${id}`);
      cleanCart();
      navigate("/");
    });
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-2">
          <table>
            <tbody>
              <tr>
                <td colSpan={2} className="h4">Resumen de la compra</td>
              </tr>
              <tr>
                <td className="h6">Cantidad: </td>
                <td className="h6"> {" "+cart.length+" "} </td>
              </tr>
              <tr>
                <td className="h5">Total: </td>
                <td className="h5">${_totalCompra}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button disabled={cart.length === 0} onClick={actionBuy} className="btn btn-primary mt-5">
                    Comprar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default BuyComponent;
