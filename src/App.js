import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Carousel from './components/Carousel';
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Carousel />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidas manicuras!"}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;



{/* <NavBar />
<ItemListContainer greeting={"Bienvenidas"} />
<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
<ItemDetailContainer /> */}