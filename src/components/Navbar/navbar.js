import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const navbar = () => {


    function refreshPage() {
        window.location.reload();
      }

    return (
        <>
            <div className="top-nav" id="home">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-auto" onClick={refreshPage}>
                            <p> <i className='bx bxs-envelope'></i> MessWallah@gmail.com</p>
                        </div>
                        <div className="col-auto social-icons">
                            <a href="#"><i className='bx bxl-github'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>

                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">MessWallah -A Mess Manager<span className="dot"></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item" onClick={refreshPage}>
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="plans">Plans</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="members">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="login">login</Link>
                            </li>
                            <li className="nav-item">
                            </li>

                        </ul>
                        <Link to="contact"  className="btn btn-brand ms-lg-3">Contact</Link>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar