import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from '../utils/style-generators/buttonGenerator'
import { putNewImage } from "../utils/api-functions/putNewImage";
import getSearchImages from "../utils/api-functions/getSearchImages";
import {deleteImage} from '../utils/api-functions/deleteImage'
// import KeepLoggedIn from "../utils/login/KeepLoggedIn";
import LogOut from "../utils/login/Logout";


const Admin = () => {
	const [alt, setAlt] = useState('')
	const [color, setColor] = useState('')
	const [image, setImage] = useState('')
	const [title, setTitle] = useState('')
	const [uploadSuccess, setUploadSuccess] = useState(false); 
	const [searchString, setSearchString] = useState('');
	const [searchResult, setSearchResult] = useState([])
	const [hasSearched, setHasSearched] =useState(false)	

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

	const matchingImages = searchResult ? [...searchResult] : []

	console.log("searchResult 1:", searchResult);

	const handleOnChange = (event) => {
	
		setSearchString(event.target.value)
	}

	const handleSearch = async () => {
		try{
			const search = await getSearchImages(searchString)
			setSearchResult(search)
			setHasSearched(true);

		}catch (error) {
			console.error("Error getting search result:", error)
		}
		
		console.log("searchResult 2:", searchResult);
	}	
	
	const handleDeleteImage = async (imageId) => {
		console.log('imageid:' , imageId);
			try { 
				await deleteImage(imageId)			
			
			} catch {
				console.error( {message: 'Failed to delete'})			
			}
		

	}

	return(
	<section className="m-5">
		<LogOut/>
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
			<label  htmlFor="search">
				<span className="font-bold text-1xl">Sök</span>
				<div className="flex items-center border border-darkgray rounded-md px-2 py-2 "> 
					<div className="h-8 w-8">
						<MdSearch size={30}/>
					</div>
					<input
						placeholder="ex. frukost"
						id="search"
						type="text" 
						value = {searchString}
						onChange={handleOnChange}
						className="w-full h-9 text-lg"
					/>
				</div>
			</label>
				<div className="text-center p-3">
						<Button onClick={handleSearch}>Sök</Button>
						<div className="m-2">
							<p>Sökresultat</p>
						</div>
						<p className="mt-4 ">{hasSearched ?"Klicka på den bilden du vill ta bort": ""}</p>
				</div>
					<div className="mt-5">
					 	<ul> 
							{matchingImages.length > 0 ? (
								matchingImages.map((image) => (
								<li 
								key={image.imageId}>		
										<h3>{image.title}</h3>
										<img src={image.imageUrl} alt={image.alt} />
										<Button 
											onClick={() => handleDeleteImage(image.imageId)}
											style="transparent">
												<p>Ta bort bild </p> 
												<p><RiDeleteBin6Line size={30} /> </p>
										</Button>
								</li>
								))
							) : (
								hasSearched ? "Inga resultat matchade sökningen" : " "
							)}
						</ul> 
					</div>			
		</div>
		</section>
	)
}

export default Admin

{/* <img src={`data:image/svg+xml;base64,${image}`} alt={alt} /> */}


/* <input
type="file"
accept="image/jpeg"
onChange={(event) => {
	const file = event.target.files[0]; 
	if(file) {
		const reader = new FileReader(); 
		reader.onload = () => {
			const buffer = reader.result;
			setImage(buffer)
		}
		reader.readAsArrayBuffer(file); // Läs filen som en array buffer
	}
}
/> */