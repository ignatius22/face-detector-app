import React from 'react';
import Tilt from 'react-tilt'
import './logo.css'
import brain from './brain.png'

const  logo = () => {
	return (
		<div className='ma4 mt0'>

		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
 				<div className="Tilt-inner pa3"> <img style={{paddingTop:'5px'}} src={brain} alt='brain' /> </div>
		</Tilt>
			
		</div>
	)
}

export default logo
