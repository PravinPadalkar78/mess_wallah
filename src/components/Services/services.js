import React from 'react'
import './services.css'
import icon1 from '../imges/icon1.png'
import icon2 from '../imges/icon2.png'
import icon3 from '../imges/icon3.png'
import icon4 from '../imges/icon4.png'
import icon5 from '../imges/icon5.png'

const services=()=> {
  return (
    <section id="services" className="text-center">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="intro">
                    <h6>Our Services</h6>
                    <h1>What We Do?</h1>
                    <p className="mx-auto"> Our work is to connect the Mess service to students and needy customers . 
                        We bridge the gap between these two . 
                        We provide a seemless connecting pltform so that they both get to their need</p>
                </div>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6">
                <div className="service">
                    <img src={icon1} alt=""/>
                    <h5>Marketing</h5>
                    <p>This website provides a platform for the Mess Services to publicize their service,
                         so that they get the pool of customers .Premium service providers on the platform get personalized marketing strategy.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service">
                    <img src={icon2} alt=""/>
                    <h5>Logo Designing</h5>
                    <p>Graphic designers being provided by our platform at very affordable price 
                        plays very important role in marketing of service providers in our platform</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service">
                    <img src={icon3} alt=""/>
                    <h5>Buisness consulting</h5>
                    <p>Our platform provides Buisness stratagis and proffesionals for taking  better 
                        decissions  for growth of their Buisness  or service </p>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
                <div className="service">
                    <img src={icon4} alt=""/>
                    <h5>Brand Identity</h5>
                    <p>We help the service providers to make their serviece a wellknown brand using our plans.</p>
                </div>
            </div>

            
        </div>
    </div>
    </section>
  )
}

export default services