import React from 'react';
import Login from './Login';
import Register from './Register';
import {Route} from 'react-router-dom'
import './home.css';

export default function Home() {
    return (
        <div className="home">
            
            <Login/>
            <Route path="/register" exact component={Register}/>
            
        </div>
    )
}
