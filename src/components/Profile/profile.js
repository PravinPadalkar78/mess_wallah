import React from 'react'
import Profileitems from './profileitems'
const profile = () => {
	return (
		<section>

			<div id='plans' className="container">
				<h1>Available Plans</h1>
					<div className="row my-5">
						<Profileitems name={'Nilesh Messwala'} address={'XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,  Thane, Maharashtra'} mobile={'99348238242'} tmob={'0251-121324'}/>
						<Profileitems name={'Ganesh Messwala'} address={'XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,  Thane, Maharashtra'} mobile={'99348238242'} tmob={'0251-121324'}/>

						{/* <Profileitems name={'Ramesh Messwala'} address={'XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,  Thane, Maharashtra'} mobile={'99348238242'} tmob={'0251-121324'}/> */}

						<Profileitems name={'Suresh Messwala'} address={'XYZ,301-ABC Building, Near PQR Shop , Ulhasnagar-421103,  Thane, Maharashtra'} mobile={'99348238242'} tmob={'0251-121324'}/>
						
					</div>
			</div>
		</section>
	)
}

export default profile