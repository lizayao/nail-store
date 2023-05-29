import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsView from "./views/ProductsView";
import DetailProductView from "./views/DetailProductView";
import NavBarComponent from "./components/NavBarComponent";
import AboutView from "./views/AboutView";
import { routes } from "./routes";
import ItemFormView from "./views/ItemFormView";
import GeneralContext from "./context/GeneralContext";
import { useState } from "react";
import DetailCartView from "./views/DetailCartView";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart,item]);
  };

  const removeToCart = (item) => {
    const newArray = cart.filter(_item => _item.id !== item.id);
    setCart(newArray)
  };

  const cleanCart = () => {
    setCart([]);
  };

  return (
    <GeneralContext.Provider value={{ addToCart,cart,removeToCart,cleanCart }}>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path={routes.root} element={<ProductsView />}></Route>
          <Route path="/products/detail/:idProduct" element={<DetailProductView />}></Route>
          <Route path={routes.aboutView} element={<AboutView />} />
          <Route path="/eventos" element={<ItemFormView />}></Route>
          <Route path="/products/car" element={<DetailCartView />}></Route>
          <Route path="/category/:category" element={<ProductsView />}></Route>
        </Routes>
      </BrowserRouter>
    </GeneralContext.Provider>
  );
}

export default App;
