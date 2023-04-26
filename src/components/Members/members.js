import React from 'react'
import './members.css'
import team1 from '../imges/team_1.jpeg'
import team2 from '../imges/team_2.jpg'
import team3 from '../imges/team_3.jpeg'

const members=()=> {
  return (
    <section id="team container">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="intro">
                        <h6>Team</h6>
                        <h1>Team Members</h1>
                        <p className="mx-auto">Ambitious Startup by Four friends, graduated from Vidyalankar institute of technology(VIT) Under the guidance of Divya Nimbalkar Ma'am</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8">
                    <div className="team-member">
                        <div className="image">
                            <img src={team1} alt="Helloo"/>
                            <div className="social-icons">
                                <a href="#"><i className='bx bxl-facebook'></i></a>
                                <a href="#"><i className='bx bxl-twitter'></i></a>
                                <a href="#"><i className='bx bxl-instagram'></i></a>
                                <a href="#"><i className='bx bxl-pinterest'></i></a>
                            </div>
                            <div className="overlay"></div>
                        </div>

                        <h5>Jayesh Shinde</h5>
                        <p>CFO-Shett Lokk</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="team-member">
                        <div className="image">
                            <img src={team2} alt=""/>
                            <div className="social-icons">
                                <a href="#"><i className='bx bxl-facebook'></i></a>
                                <a href="#"><i className='bx bxl-twitter'></i></a>
                                <a href="#"><i className='bx bxl-instagram'></i></a>
                                <a href="#"><i className='bx bxl-pinterest'></i></a>
                            </div>
                            <div className="overlay"></div>
                        </div>

                        <h5>Pravin Padalkar</h5>
                        <p>Developer</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="team-member">
                        <div className="image">
                            <img src={team3} alt=""/>
                            <div className="social-icons">
                                <a href="www.google.com"><i className='bx bxl-facebook'></i></a>
                                <a href="www.google.com"><i className='bx bxl-twitter'></i></a>
                                <a href="www.google.com"><i className='bx bxl-instagram'></i></a>
                                <a href="www.google.com"><i className='bx bxl-pinterest'></i></a>
                            </div>
                            <div className="overlay"></div>
                        </div>

                        <h5>Abhishek Yadav</h5>
                        <p>CTO</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="team-member">
                        <div className="image">
                            <img src={team2} alt=""/>
                            <div className="social-icons">
                                <a href="www.google.com"><i className='bx bxl-facebook'></i></a>
                                <a href="www.google.com"><i className='bx bxl-twitter'></i></a>
                                <a href="www.google.com"><i className='bx bxl-instagram'></i></a>
                                <a href="www.google.com"><i className='bx bxl-pinterest'></i></a>
                            </div>
                            <div className="overlay"></div>
                        </div>

                        <h5>Akshay Patil</h5>
                        <p>Investor</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

  )
}

export default members