import React from 'react';
import './register.css';
import {Link} from 'react-router-dom'

export default function Register() {
    const [state,setState]=React.useState({
        username:'',
        password:''
    })
    return (
        <div className="register-page">
            <div className="register-page-area">
                <h1>Register</h1>
                <div className="register-main-page">
                    <div>
                        <input type="text" name="username" placeholder="username"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="username"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="username"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="username"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                        <input type="password" name="password" placeholder="password" required="required"/>
                    </div>
                </div>
                <Link  to="/dashboard" onClick={()=>{
                        
                }}>Register</Link>
            </div>
        </div>
    )
}