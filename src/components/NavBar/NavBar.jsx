import React from "react";
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Nail Store</h3>
            <div>
                <button>Esmaltes y polímeros</button>
                <button>Decoración</button>
                <button>Cabinas UV/LED</button>
                <button>Herramientas</button>
                <button>Pinceles</button>
                <button>Tips y limas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;