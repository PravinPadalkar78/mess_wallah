import React from 'react'
import banner1 from '../imges/about.jpg'
import './about.css'
import Map from '../Map'
import { Link } from 'react-router-dom'
const about=()=> {
  return (
    <section id="about">
       <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1 className="alingment">About Us</h1>
				</div>
				<div className="content">
					<h3>We connect Students with Mess Service Providers</h3>
					<p>Majority of us spend our days slogging at work, and in order to compensate for that (or rather give in to unhealthy cravings) we feed ourselves with greasy, oily junk food. We've underestimated the power of a good home-cooked dabba. Check out these  <Link to="/plans" className='text-brand'>Tiffin Services</Link> in the city will sort you out.</p>
					 {/* <div className="button">
						<a href="">Read More</a>
					</div> */}
				</div>
				<div className="social">
					<a href="www.google.com"><i className="fab fa-facebook-f"></i></a>
					<a href="www.google.com"><i className="fab fa-twitter"></i></a>
					<a href="www.google.com"><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section">
				<img src={banner1} alt='This is banner'/>
			</div>
		</div>
		<Map/>
	</div>

    </section>
  )
}

export default about