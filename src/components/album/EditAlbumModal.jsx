import React, { useEffect, useState } from "react";
import "./editAlbumModal.css";

const EditAlbumModal = ({ handleEditAlbum, currentTitle, setUpdateAlbum, currentUser }) => {
	useEffect(() => {
		document.body.style.overflowY = "hidden";
		return () => {
			document.body.style.overflowY = "scroll";
		};
	});

	const [editAlbum, setEditAlbum] = useState(currentTitle);

	return (
		<>
			<div className="modal-wrapper" onClick={() => setUpdateAlbum(false)}></div>
			<div className="modal-content">
				<h4>Edit Album</h4>
				<input type="text" name="album-name" id="edit-album" placeholder="Enter Album" value={editAlbum} onChange={(e) => setEditAlbum(e.target.value)} />
				<button
					onClick={() => {
						setUpdateAlbum(false);
						handleEditAlbum(editAlbum, currentUser);
					}}
				>
					Add
				</button>
			</div>
		</>
	);
};

export default EditAlbumModal;
