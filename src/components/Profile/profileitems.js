import React from 'react'
import logo1 from '../imges/profile1.jpg'
import './profile.css'
import { Link } from 'react-router-dom'
const profileitems = (props) => {
  
	return (
		<div className="col-md-3" style={{margin :"0px 1px "}}>
			<div className="card profile" style={{ width: "20rem"  }}>
				<img src={logo1} className="card-img-top" alt="..." />
				
				<div className="card-body">
					<h5 className="card-title text-center">{props.name}</h5>
					<hr />
					<p className="card-text"><b>Address:</b> {props.address}</p>
					<p><b>Phone Number:</b>{props.mobile} </p>
					<p><b>Telephone Number:</b>{props.tmob}</p>
					<Link className="btn btn-success">Show More</Link>
				</div>
			</div>
		</div>
	)
}

export default profileitems