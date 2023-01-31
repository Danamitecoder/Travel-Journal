import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import Section from './Section'
import Style from './style.css'
import Data from './Data'
import BlankCard from './BlankCard'
import { useState } from "react";
import Example from './Example'

function App() {
	const card = Data.map(item => {
		return (
			<Section
				key={item.id}
				title={item.title}
				location={item.location}
				googleMaps={item.googleMapsUrl}
				startDate={item.startDate}
				endDate={item.endDate}
				description={item.description}
				image={item.imageUrl}
			/>
		)
	})
	return (
		<div>
			<div className="card--container">
				<Nav />
				<Example />
				{card}
			</div>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
)

