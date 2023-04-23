import React from "react";
import CartWidget from "./CartWidget"
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'


const NavBar = () => {
    return (
        <nav className="navbar bg-body-tertiary px-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Nail Store" width={180} />
                </Link>
                <NavLink to={`/category/esmaltes`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Esmaltes y polimeros</NavLink>
                <NavLink to={`/category/decoracion`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Decoracion</NavLink>
                <NavLink to={`/category/cabinas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cabinas UV/LED</NavLink>
                <NavLink to={`/category/herramientas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Herramientas</NavLink>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;