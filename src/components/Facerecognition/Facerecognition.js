import React from 'react'
import './Facerecognition.css'

const  Facerecognition = ({imageUrl, box}) =>{
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
			<img id='input-image' alt='face' src={imageUrl}  width='500' height='auto'/>
			<div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol }}></div>
			</div>
		</div>
	)
}

export default Facerecognition
