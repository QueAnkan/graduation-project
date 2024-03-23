import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from '../utils/style-generators/buttonGenerator'
import { putNewImage } from "../utils/api-functions/putNewImage";
import getSearchImages from "../utils/api-functions/getSearchImages";
import {deleteImage} from '../utils/api-functions/deleteImage'
import KeepLoggedIn from "../utils/login/KeepLoggedIn";
import LogOut from "../utils/login/Logout";
import { isTitleValid, isAltValid } from "../utils/validations/UploadValidation";


const Admin = () => {
	const [alt, setAlt] = useState('')
	const [color, setColor] = useState('')
	const [image, setImage] = useState('')
	const [title, setTitle] = useState('')
	const [uploadSuccess, setUploadSuccess] = useState(false); 
	const [searchString, setSearchString] = useState('');
	const [searchResult, setSearchResult] = useState([])
	const [hasSearched, setHasSearched] =useState(false)
	const [titleIsDirty, setTitleIsDirty] = useState(false)
	const [altIsDirty, setAltIsDirty] = useState(false)
	// const [imageIsDirty, setImageIsDirty] =useState(false)

	const [titleIsValid, titleErrorMessage] = isTitleValid(title)
	const [altIsValid, altErrorMessage] = isAltValid(alt)
	const [colorErrorMessage, setColorErrorMessage]= useState('')
	const [imageErrorMessage, setImageErrorMessage]= useState('')


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
			if (!image){
				
				setImageErrorMessage('Ingen fil är vald. Vänligen välj en fil i jpeg-format')
				return
			}
			if (!alt){
				setAltIsDirty(true)
				return
			}
			if(!title){
				setTitleIsDirty(true)
				return
			}
			if (!color){
				setColorErrorMessage("Vänligen välj om bilden är i färg eller svartvitt.")
				return
			}


			await putNewImage(alt, color, image, title);
			setUploadSuccess(true); 
		}catch (error) {
			console.error('Error posting data:', error.message)
		}
	}

	const matchingImages = searchResult ? [...searchResult] : []


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
		
		<section className="mt-10 flex flex-col w-full md:w-[500px] lg:w-[800px]">
		<KeepLoggedIn />
		<LogOut/>
			<form>
				<section className="mb-10">
					<div className="flex flex-col"> 
						<h1 className="font-bold mt-5 text-xl mb-6" >Lägga till nya bilder i databasen</h1>
					</div>
					<label htmlFor="imageFile">
						<h2 className="font-bold">Välj en fil i jpeg-format: </h2>
						<input
							id="imageFile"
							type="file"
							accept="image/jpg, img/jpeg"
							className="text-md block w-full 
							file:mr-4 file:py-2 file:px-4 file:rounded-md
							file:border-0 file:text-md
							file:bg-darkblue file:text-white"
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
					<div className="h-4">
						{imageErrorMessage && !image && <div className="text-red">{imageErrorMessage} </div>}
					</div>
				</section>




				<section className="mb-10">
					<label htmlFor="altText">
						<h2  className="font-bold">Alternativ text</h2>
						<p className="text-md w-80 md:w-11/12 lg:w-3/4">Texten beskriver innehållet i bilden och hjälper personer med synnedsättning att förstå dess betydelse</p>
						<div className="flex items-center border border-darkgray rounded-md px-2 py-2 w-72 lg:w-1/2">
							<input
								id="altText"
								type="text"
								name="alt"
								className="w-full h-9 text-base"
								placeholder="ex. Färgad bild av en tallrik med flingor och ett glas mjölk. max 150 tecken " 
								max={120}
								onChange={(event) => setAlt(event.target.value)}
								onBlur={() => setAltIsDirty(true)}/>
						</div>
					</label>
					<div className="h-4 pt-2 text-red"> {altIsDirty ? altErrorMessage  : ''}</div>
				</section>



				<section className="mb-10">
					<label htmlFor="title">
						<h2 className="font-bold">Titel</h2>
						<p>Skriv den titel som ska vara till bilden</p>
						<div className="flex items-center border border-darkgray rounded-md p-2 w-72 lg:w-1/2">
							<input
								id="title"
								type="text"
								name="title"
								className="w-full h-9 text-base"
								placeholder="ex. frukost" 
								maxLength={35}
								onChange={(event) => setTitle(event.target.value)}
								onBlur={() => setTitleIsDirty(true)}/>
						</div>
					</label>
					<div className="h-4 pt-2 text-red"> {titleIsDirty ? titleErrorMessage  : ''}</div>
				</section>



				<section className="mb-16">
						<div className="mb-4">
							<h2 className="font-bold">Ange om bilden är i färg eller svart/vit</h2>
						</div>
					<label htmlFor="colorCheckbox" className="mr-4">
						<input 
							id="colorCheckbox"
							type="checkbox"
							value="color"
							className="m-2"
							checked={color === 'color'}
							onChange={(event) => setColor(event.target.checked ? 'color': '')}
							/>
							Färgbild
					</label>
					<label  htmlFor="bwCheckbox">
						<input 
						id="bwCheckbox"
						type="checkbox"
						value="bw"
						checked={color === 'bw'}
						onChange={(event) => setColor(event.target.checked ? 'bw' : '')}
						className="m-2"
						/>
							Svart/vit bild
					</label>
					<div className="h-4">
						{colorErrorMessage && !color && <div className="text-red ">{colorErrorMessage}</div>}
						</div>
					<div className="my-10 mx-auto ">
						<p className="pb-4">När alla fält är ifyllda kan du lägga till en bild i databasen.</p>
					<Button 
						onClick={handleSubmit}
						>Lägg till</Button>
					{uploadSuccess && <p>Bilden har laddats upp framgångsrikt!</p>}
					</div>
				</section>
			</form>
			





		<div className="flex flex-col items-start">
			<label htmlFor="search" className="w-full">			
				<h2 className="font-bold">För att ta bort en bild, sök i databasen</h2>
				<div className="flex items-center border border-darkgray rounded-md p-2 w-72 lg:w-1/2"> 
					<div className="h-8 w-8">
						<MdSearch size={30}/>
					</div>
					<input
						placeholder="ex. frukost"
						id="search"
						type="text" 
						value = {searchString}
						onChange={handleOnChange}
						className="w-full h-9 text-base"
					/>
				</div>
			</label>
				<div className="py-6">
						<Button onClick={handleSearch}>Sök</Button>
						
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

