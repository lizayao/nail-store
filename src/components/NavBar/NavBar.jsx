import React from "react";
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link to='/'>
                <img src="Images/logo.png" alt="logo" />
            </Link>
            <div className="container-fluid">
                <NavLink to={`/category/esmaltes`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Esmaltes y polimeros</NavLink>
                <NavLink to={`/category/decoracion`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Decoracion</NavLink>
                <NavLink to={`/category/cabinas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cabinas UV/LED</NavLink>
                <NavLink to={`/category/herramientas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Herramientas</NavLink>
                <NavLink to={`/category/pinceles`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pinceles</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;