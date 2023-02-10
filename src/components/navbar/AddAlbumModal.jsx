import React, { useEffect, useState } from "react";
import "./addAlbumModal.css";

const AddAlbumModal = ({ setAlbum, handleAddAlbum }) => {
	useEffect(() => {
		document.body.style.overflowY = "hidden";
		return () => {
			document.body.style.overflowY = "scroll";
		};
	});

	const [albumName, setAlbumName] = useState("");
	return (
		<>
			<div className="modal-wrapper" onClick={() => setAlbum(false)}></div>
			<div className="modal-content">
				<h4>Add New Album</h4>
				<input
					type="text"
					name="album-name"
					id=""
					placeholder="Enter Album"
					autoComplete="on"
					onChange={(e) => {
						setAlbumName(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						setAlbum(false);
						handleAddAlbum(albumName);
					}}
				>
					Add
				</button>
			</div>
		</>
	);
};

export default AddAlbumModal;
