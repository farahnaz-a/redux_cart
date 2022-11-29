import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <nav className="footer__navbar">
                <ul className="footer__navbar__nav">
                    <li className="footer__navbar__nav__item">
                        <NavLink to="/" className="footer__navbar__nav__link">Home</NavLink>
                    </li>
                    <li className="footer__navbar__nav__item">
                        <NavLink to="/product" className="footer__navbar__nav__link">Product</NavLink>
                    </li>
                    <li className="footer__navbar__nav__item">
                        <NavLink to="/user" className="footer__navbar__nav__link">User</NavLink>
                    </li>
                    <li className="footer__navbar__nav__item">
                        <NavLink to="/contact" className="footer__navbar__nav__link">Contact</NavLink>
                    </li>
                    <li className="footer__navbar__nav__item">
                        <NavLink to="/other/inner" className="footer__navbar__nav__link">Other</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer