import React from "react";

export default function BlankCard(props) {
	console.log(props)
	return (
		<div className="main--section">
			<div className="left--section">
				<img src={props.photo} alt="image" className="section--image" />
			</div>
			<div className="right--section">
				<img src="src/imgs/location.png" alt="location logo" className="section--logo" />
				<span className="location">{props.location}</span>
				<span className="googleMaps"><a href={props.mapsLink}>View on Google Maps</a></span>
				<p className="title">{props.title}</p>
				<p className="description">{props.description}</p>
			</div>
		</div>
	)
}

