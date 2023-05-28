import React, { memo, useContext, useMemo } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import { NavLink } from "react-router-dom";
import GeneralContext from "../context/GeneralContext";
import logo from "../assets/img/logo.png";
import cartIcon from "../assets/img/cart-shopping-solid.svg"
import useFirestore from "../utils/useFirestore";
const nameCollection = "categories";


const NavBarComponent = (props) => {
  const { cart } = useContext(GeneralContext);
  const [data] = useFirestore({ nameCollection });

  const dataProcess = useMemo(() => {
    const categoriesObject = data.length !== 0 ? data[0] : [];
    return "category" in categoriesObject ? categoriesObject.category : [];
  }, [data]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img height={120} src={logo} alt="Nail Store" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ListOptionNavBarComponent nameOption={dataProcess}></ListOptionNavBarComponent>
        </div>
        {cart.length !== 0 ? (
        <div>
          <NavLink to="/products/car"><img src={cartIcon} alt="Cart" width={25} /></NavLink> {cart.length}
        </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default memo(NavBarComponent);
