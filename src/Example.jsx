import React, { useState } from "react";
import BlankCard from "./BlankCard";

function Example() {
	const [location, setLocation] = useState("");
	const [mapsLink, setMapsLink] = useState("");
	const [title, setTitle] = useState("");
	const [photo, setPhoto] = useState("");
	const [description, setDescription] = useState("");
	const [showForm, setShowForm] = useState(false);

	const handleImageChange = (event) => {
		const imageString = URL.createObjectURL(event.target.files[0])
		setPhoto(imageString);
		console.log(photo)
		console.log(imageString)
	};

	const handleClick = () => {
		setShowForm(true);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setShowForm(false);
	};

	return (
		<div className="form--container">
			{showForm ? (
				<form className="form" onSubmit={handleSubmit}>
					<div className="form--location">
						<label htmlFor="location">Location:</label>
						<input
							type="text"
							id="location"
							value={location}
							onChange={(event) => setLocation(event.target.value)}
						/>
					</div>
					<div className="form--mapsLink">
						<label htmlFor="mapsLink">Google Maps Link:</label>
						<input
							type="text"
							id="mapsLink"
							value={mapsLink}
							onChange={(event) => setMapsLink(event.target.value)}
						/>
					</div>
					<div className="form--title">
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							id="title"
							value={title}
							onChange={(event) => setTitle(event.target.value)}
						/>
					</div>
					<div className="form--photo">
						<label htmlFor="photo">Photo:</label>
						<input key='location' id="photo" type="file" onChange={handleImageChange} photo={photo} />
					</div>
					<div className="form--description">
						<label htmlFor="description">Description:</label>
						<textarea
							id="description"
							value={description}
							onChange={(event) => setDescription(event.target.value)}
						/>
					</div>
					<button className="form--submit" type="submit">Submit</button>
				</form>
			) : (
				<div className="button--add--container">
					<button className="button--add" onClick={handleClick}>Add Entry</button>
				</div>
			)}
			{location && mapsLink && title && photo && description && (
				<BlankCard
					location={location}
					mapsLink={mapsLink}
					title={title}
					photo={photo}
					description={description}
				/>
			)}
		</div>
	);
}

export default Example;
