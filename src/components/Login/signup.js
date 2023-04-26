import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", phone: "", password: "" });
    const { name, email, phone, password, cpassword } = credentials;
    let Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone, password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.AuthToken);
            props.showAlert("Account Created Sucessfully","success");
            Navigate('/');
        }
        else {
            props.showAlert("Invalid Details","success");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    return (
        <div className="container my-4">
            <h2>SignUp</h2>

            <form onSubmit={handleSubmit}>
                <div className="form first">
                    <div className="details personal">
                        <span className="title">Personal Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Full Name</label>
                                <input type="text" name='name' id='name' onChange={onChange} placeholder="Enter your name" required />
                            </div>

                            {/* <div className="input-field">
                                <label>Date of Birth</label>
                                <input type="date" id='date' name='date' placeholder="Enter birth date" required />
                            </div> */}

                            <div className="input-field">
                                <label>Email</label>
                                <input type="text" id='email' name='email' onChange={onChange} placeholder="Enter your email" required />
                            </div>

                            <div className="input-field">
                                <label>Mobile Number</label>
                                <input type="number" id='phone' name='phone' onChange={onChange} placeholder="Enter mobile number" required />
                            </div>
                            <div className="input-field">
                                <label>Address</label>
                                <input type="text" name='address' id='address' placeholder="Enter address" required />
                            </div>
                            <div className="input-field">
                                <label>Password</label>
                                <input type="password" name='password' id='password' onChange={onChange} placeholder="Enter Password" minLength={5} required />
                            </div>
                            <div></div>
                            <div className="input-field">
                                <label>Confirm Password</label>
                                <input type="password" name='cpassword' id='cpassword' placeholder="Confirm Your Password" minLength={5} required />
                            </div>
                        </div>
                    </div>

                    <div className="details ID">
                        <button className="btn btnText  my-3 ">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup