import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Album from "./components/album/Album";

const App = () => {
	//? Using useState Hook to save data
	const [album, setAlbum] = useState([]);

	// * Creating SideEffects to fetch album from API
	useEffect(() => {
		const fetchAlbum = async () => {
			const req = await fetch("https://jsonplaceholder.typicode.com/albums");
			const data = await req.json();
			setAlbum(data.slice(0, 30));
		};
		fetchAlbum();
	}, []);

	// handle Adding New Album Event
	const handleAddAlbum = (name) => {
		const addAlbumReq = async () => {
			try {
				const addAlbum = await fetch(
					"https://jsonplaceholder.typicode.com/posts",
					{
						method: "POST",
						body: JSON.stringify({
							userId: userId,
							id: userId,
							title: name,
						}),
						headers: {
							"Content-type": "application/json; charset=UTF-8",
						},
					},
					console.log(await addAlbum, "added Successfully")
				);
			} catch (err) {
				console.log("Error in Adding New Data", err);
			}
			addAlbumReq();
		};

		const userId = album.length + 1;
		const data = { userId: userId, id: userId, title: name };
		setAlbum([...album, data]);
	};

	// Handle Selected Album Delete
	const handleDeleteAlbum = (id) => {
		const deleteAlbum = async () => {
			try {
				const req = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${id}`,
					{
						method: "DELETE",
					},
					console.log("Deleted Successfully")
				);
			} catch (err) {
				console.log(err, "Error in deleting");
			}
		};
		deleteAlbum();
		const newArray = album.filter((item) => item.id !== id);
		setAlbum([...newArray]);
	};

	// Function for Handle Album Edit Event
	const handleEditAlbum = (title, id) => {
		const editAlbumReq = async () => {
			try {
				await fetch(
					"https://jsonplaceholder.typicode.com/albums",
					{
						method: "PUT",
						body: JSON.stringify({
							userId: id,
							id: id,
							title: title,
						}),
						headers: {
							"Content-type": "application/json; charset=UTF-8",
						},
					},
					console.log(update.json(), "Updated Successfully")
				);
			} catch (err) {
				console.log("Error in Editing Album", err);
			}
			editAlbumReq();
		};

		album[id - 1].title = title;
		setAlbum(album);
	};

	return (
		<>
			<Navbar handleAddAlbum={handleAddAlbum} />
			<Album album={album} handleDeleteAlbum={handleDeleteAlbum} handleEditAlbum={handleEditAlbum} />
		</>
	);
};

export default App;
