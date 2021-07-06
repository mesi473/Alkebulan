import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header-log">
                <h1>AASTU E-learning</h1>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
