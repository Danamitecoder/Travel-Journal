import React from 'react'

export default function Section(props) {
	return (
		<div className="main--section">
			<div className="left--section">
				<img src={props.image} alt="image" className="section--image" />
			</div>
			<div className="right--section">
				<img src="src/imgs/location.png" alt="location logo" className="section--logo" />
				<span className="location">{props.location}</span>
				<span className="googleMaps"><a href={props.googleMaps}>View on Google Maps</a></span>
				<p className="title">{props.title}</p>
				<span className="startDate">{props.startDate}</span>
				<span className="endDate">{props.endDate}</span>
				<p className="description">{props.description}</p>
			</div>
		</div>
	)
}

