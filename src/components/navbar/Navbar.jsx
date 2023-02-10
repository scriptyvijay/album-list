import React, { useState } from "react";
import "./navbar.css";
import AddAlbumModal from "./AddAlbumModal";

const Navbar = ({ handleAddAlbum }) => {
	const [addAlbum, setAddAlbum] = useState(false);
	return (
		<>
			<div className="navbar">
				<h1>
					Albums<span>List</span>
				</h1>
				<button
					onClick={() => {
						setAddAlbum(true);
					}}
				>
					Add Album
				</button>
			</div>
			<div>{addAlbum && <AddAlbumModal setAlbum={setAddAlbum} handleAddAlbum={handleAddAlbum} />}</div>
		</>
	);
};

export default Navbar;
