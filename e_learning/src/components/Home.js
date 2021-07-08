import React from 'react';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Footer from './Footer';
import {Route} from 'react-router-dom'
import './home.css';
import Image1 from '../images/PngItem_1576348.png';
import Image2 from '../images/PngItem_2253743.png'

export default function Home() {
    return (
        <div className="home">
            <Header/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <div className="home_image">
                <img src={Image2} alt=""/>
                <h1>We Work for Better Future</h1>
            </div>
            <div className="home_image">
                <h1>ሀ ሁ ሂ ሃ ሄ ህ ሆ</h1>
            </div>
            <Footer/>
        </div>
    )
}
