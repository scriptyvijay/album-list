import { useState } from "react";
import "./album.css";
import EditAlbumModal from "./EditAlbumModal";

const Album = ({ handleEditAlbum, handleDeleteAlbum, album }) => {
	const [updateAlbum, setUpdateAlbum] = useState(false);
	const [currentTitle, setCurrentTitle] = useState("");
	const [currentUser, setCurrentUser] = useState();
	return (
		<>
			<div className="album-list">
				{album.map((item) => {
					return (
						<section key={item.id} className="album">
							<p>{item.id}</p>
							<p>{item.title.slice(0, 20) + "..."}</p>
							<section>
								<button
									onClick={() => {
										setUpdateAlbum(true);
										setCurrentTitle(item.title);
										setCurrentUser(item.id);
									}}
								>
									Update
								</button>
								<button
									onClick={() => {
										handleDeleteAlbum(item.id);
									}}
								>
									Delete
								</button>
							</section>
						</section>
					);
				})}
			</div>
			<div>{updateAlbum && <EditAlbumModal handleEditAlbum={handleEditAlbum} currentTitle={currentTitle} setUpdateAlbum={setUpdateAlbum} currentUser={currentUser} />}</div>
		</>
	);
};

export default Album;
