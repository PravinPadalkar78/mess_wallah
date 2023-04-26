import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate} from 'react-router-dom'


const Login = (props) => {
    
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //redirect
            localStorage.setItem('token',json.AuthToken);
            Navigate('/')
            props.showAlert("Login Successfull","success");
        }
        else{
           props.showAlert("Invalid credentials","danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="wrapper my-4">
            <div className="modalForm">
                <h2>Login</h2>
                <div className="my-1">

                </div>
                <div>
                    <form onSubmit={handleSubmit} className="form user userForm">
                        <div className="inputGroup">
                            <input type="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter Your Gmail" />
                        </div>
                        <div className="inputGroup">
                            <input type="password" name="password" value={credentials.password} onChange={onChange} placeholder="Enter Password" />
                        </div>
                        <button type="submit" className="submitBtn">Login</button>
                        <div className="member">
                            <h>Not a Member?</h>
                            <Link to="/signup">&nbsp; signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login