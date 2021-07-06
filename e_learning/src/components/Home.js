import React from 'react';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';
import './home.css';

export default function Home() {
    return (
        <div className="home">
            <Header/>
            <Login/>
            <Footer/>
        </div>
    )
}