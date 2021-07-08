import React from 'react'

export default function Register() {
    const [state,setState]=React.useState({
        username:'',
        password:''
    })
    return (
        <div className="">
            <div className="">
                <h1>Register</h1>
            </div>
            <div>
                <div>
                <input
                    onChange={(e)=>{
                        setState({...state,username:e.target.value})
                    }} 
                    value={state.username} type="text" name="username" placeholder="username"/>
                    <input onChange={(e)=>{
                        setState({...state,password:e.target.value})
                    }} 
                    value={state.password} type="password" name="password" placeholder="password" required="required"/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
