import React from "react";
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
                <h3>Nail Store</h3>
            </Link>
            <div>
                <NavLink to={`/category/esmaltes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Esmaltes y polimeros</NavLink>
                <NavLink to={`/category/decoracion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Decoracion</NavLink>
                <NavLink to={`/category/cabinas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cabinas UV/LED</NavLink>
                <NavLink to={`/category/herramientas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Herramientas</NavLink>
                <NavLink to={`/category/pinceles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pinceles</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;