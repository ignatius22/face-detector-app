import React from 'react'

const  Facerecognition = ({imageUrl}) =>{
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
			<img alt='face' src={imageUrl}  width='500' height='auto'/>
			</div>
		</div>
	)
}

export default Facerecognition
