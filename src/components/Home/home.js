import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
const home = () => {

    return (

        <>
            <div className="owl-carousel owl-theme hero-slider">
                <div className="slide slide1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center text-white">
                                <h6 className="text-white text-uppercase">design Driven for professional</h6>
                                <h1 className="display-3 my-4">We craft digital<br />experiances</h1>
                                <Link to="/plans" className="btn btn-brand">Get Started</Link>
                                <Link to="/plans" className="btn btn-outline-light ms-3">Our work</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 text-white text-center">
                                <h6 className="text-white text-uppercase">We craft digital experiances</h6>
                                <h1 className="display-3 my-4">Design Driven For<br />Professionals</h1>
                                <Link to="/plans" className="btn btn-brand">Get Started</Link>
                                <Link to="/plans" className="btn btn-outline-light ms-3">Our work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default home