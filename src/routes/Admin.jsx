import { useState, useEffect } from "react";
import Button from '../utils/style-generators/buttonGenerator'
import { putNewImage } from "../utils/api-functions/putNewImage";
import { MdSearch } from "react-icons/md";
// import {deleteImage} from '../utils/api-functions/deleteImage'

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
	
	<div className="flex flex-col w-full md:w-[500px] lg:w-[800px]">
			<section className="mb-4"> 
				<h1 className="font-bold mt-5 text-xl mb-6">Lägga till nya bilder i databasen</h1>
				<label htmlFor="input">
					<input
						className="text-md"
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
			</section>
			<section className="mb-6">
				<label htmlFor="text">
				<span className="font-bold">Alternativ text</span>
				<p className="text-md w-80 md:w-11/12 lg:w-3/4">Texten beskriver innehållet i bilden och hjälper personer med synnedsättning att förstå dess betydelse</p>
					<div className="flex items-center border border-darkgray rounded-md px-2 py-2 lg:w-1/2">
						<input
							type="text"
							placeholder="ex. tallrik med fil " 
							onChange={(event) => setAlt(event.target.value)}
							className="w-full h-9 text-lg"
						/>
					</div>

				</label>
			</section>
			<section className="mb-6">
				<label htmlFor="title">
					<span className="font-bold">Titel</span>
					<p>Skriv den titel som ska vara till bilden</p>
						<div className="flex items-center border border-darkgray rounded-md px-2 py-2 lg:w-1/2">
							<input
								type="text"
								placeholder="ex. frukost" 
								onChange={(event) => setTitle(event.target.value)}
								className="w-full h-9 text-lg"
							/>
						</div> 
				</label>
			</section>
			<section className="mb-6">
				<label htmlFor="checkbox">
					<div className="mb-4">
					<span className="font-bold">Ange om bilden är i färg eller svart/vit</span>
					</div>
					<input 
						type="checkbox"
						value="color"
						checked={color === 'color'}
						onChange={(event) => setColor(event.target.checked ? 'color': '')}
						className="mb-4"
						/>
						Färgbild
				</label>
				<label htmlFor="checkbox">
					<input 
						type="checkbox"
						value="bw"
						checked={color === 'bw'}
						onChange={(event) => setColor(event.target.checked ? 'bw' : '')}
						className="m-2"
						/>
						Svart/vit bild
				</label>
				<br />
				<div className="my-4">
					<Button onClick={handleSubmit}>Lägg till</Button>
					{uploadSuccess && <p>Bilden har laddats upp framgångsrikt!</p>}						
				</div>
			</section>
			<label  htmlFor="search">
							<p className="font-bold">För att ta bort bild, sök i databasen</p>
							<div className="flex items-center border border-darkgray rounded-md px-2 py-2 lg:w-1/2"> 
								<div className="h-8 w-8">
									<MdSearch size={30}/>
								</div>
								<input
									placeholder="ex. frukost"
									id="search"
									type="text" 
									// value = {searchString}
									// onChange={handleOnChange}
									className="w-full h-9 text-lg"
									/>
							</div>
						</label>
				{/* <Button onClick={handleSearch}>Sök</Button> */}
				<div className="m-2">
					<p>bilden som kommer ut</p>
				</div>
	</div>
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