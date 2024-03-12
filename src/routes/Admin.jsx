import { useState, useEffect } from "react";
import Button from '../utils/style-generators/buttonGenerator'
import { putNewImage } from "../utils/api-functions/putNewImage";
import {deleteImage} from '../utils/api-functions/deleteImage'

const Admin = () => {
	const [alt, setAlt] = useState('')
	const [color, setColor] = useState('')
	const [image, setImage] = useState('')
	const [title, setTitle] = useState('')
	const [uploadSuccess, setUploadSuccess] = useState(false); 

	useEffect(() => {
		let timeoutId; 
		if(uploadSuccess) {
			timeoutId = setTimeout(() => {
				setUploadSuccess(false); 
			}, 3000)
		}
		return () => clearTimeout(timeoutId); 
	}, [uploadSuccess])

	const handleSubmit = async (event) => {
		event.preventDefault(); 
		try {
			await putNewImage(alt, color, image, title);
			setUploadSuccess(true); 
		}catch (error) {
			console.error('Error posting data:', error.message)
		}
	}
	// const handleDeleteImage = async (imageId) => {

	// }

	// const handleSearch = async () => {
	
	// }

	return(
	<section className="m-5">
			<form>
			<div className="flex flex-col"> 
				<h1>Lägga till nya bilder i databasen</h1>
			</div>
			<label>
				<p>Välj fil: </p>
				<input
					type="file"
					accept="image/svg"
					onChange={(event) => {
						const file = event.target.files[0]; 
						if(file) {
							const reader = new FileReader(); 
							reader.readAsDataURL(file); 
							reader.onload = () => {
								const base64String = reader.result.split(',')[1]; 
								setImage(base64String)
							}
					}
						}}
				/>
			</label>
			<br />
			<label>
				<span>Alternativ text</span>
				<p>Texten beskriver innehållet i bilden och hjälper personer med synnedsättning att förstå dess betydelse</p>
				<input
					type="text"
					name="alt"
					placeholder="ex. " 
					onChange={(event) => setAlt(event.target.value)}/>
					
			</label>
			<br />
			<label>
				<span>Titel</span>
				<p>Skriv den titel som ska vara till bilden</p>
				<input
					type="text"
					name="title"
					// value={title}
					placeholder="ex. frukost" 
					onChange={(event) => setTitle(event.target.value)}/>
			</label>

			<p>Ange om bilden är i färg eller svart/vit</p>
			<label>
				<input 
					type="checkbox"
					value="color"
					checked={color === 'color'}
					onChange={(event) => setColor(event.target.checked ? 'color': '')}
					className="m-2"
					/>
					Färgbild
			</label>
			<label>
				<input 
					type="checkbox"
					value="bw"
					checked={color === 'bw'}
					onChange={(event) => setColor(event.target.checked ? 'bw' : '')}
					className="m-2"
					/>
					Svart/vit bild
			</label>
			<Button onClick={handleSubmit}>Lägg till</Button>
			{uploadSuccess && <p>Bilden har laddats upp framgångsrikt!</p>}
			</form>
			
		<div className="flex flex-col">
			<p>För att ta bort en bild, sök i databasen</p>
			<label>
				<p>Sök</p>
				<input 
					type="text"
				/>
			</label>
			<Button onClick={handleSearch}>Sök</Button>
			<div className="m-2">
					<p>Sökresultat</p>
			</div>
		</div>
		</section>
	)
}

export default Admin

{/* <img src={`data:image/svg+xml;base64,${image}`} alt={alt} /> */}
