import React from 'react';
import Tilt from 'react-tilt'
import './logo.css'

const  logo = () => {
	return (
		<div className='ma4 mt-0'>

		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner"> 👽 </div>
		</Tilt>
			
		</div>
	)
}

export default logo
