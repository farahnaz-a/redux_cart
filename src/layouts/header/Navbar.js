import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const cartCount = useSelector((state) => state.cart.cartItems.length)
  return (
    <header className="header">
        <div className="container">
            <nav className="navbar">
                <NavLink to="/" className="navbar__logo">Logo</NavLink>
                <ul className="navbar__nav">
                    <li className="navbar__nav__item">
                        <NavLink to="/" className="navbar__nav__link">Home</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/product" className="navbar__nav__link">Product</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/user" className="navbar__nav__link">User</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/contact" className="navbar__nav__link">Contact</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/other/inner" className="navbar__nav__link">Other</NavLink>
                    </li>
                    <li className="navbar__nav__item">
                        <NavLink to="/cart" className="navbar__nav__link">Cart ({cartCount})</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar