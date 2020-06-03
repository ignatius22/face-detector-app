import React from 'react'

const ImageLinkForm =  () =>{
	return (
		<div>
			<p className='f3'>
				{'this magic brain will detect face in your pictures. Give it a try'}
			</p>
			<div className='center'>
			<input className='f4 pa3 w-70 center' type='text' />
			<button className='w-30 grow f4 ph3 pv2 dib white bg-light-purple'>Detect</button>
			</div>
		</div>
	)
}

export default ImageLinkForm 
