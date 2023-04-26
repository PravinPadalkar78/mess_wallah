import React from 'react'
import './footer.css'
const footer=()=> {
    return (
        <footer>
            <div className="footer-top text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h4 className="navbar-brand">MessWallah -A Mess Manager<span className="dot">.</span></h4>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                classical Latin literature from</p>
                            <div className="col-auto social-icons">
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                            <a href="#"><i className='bx bxl-github'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p className="mb-0">Copyright@2020. All rights Reserved</p>
            </div>
        </footer>
    )
}

export default footer