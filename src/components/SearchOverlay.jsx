import {useState} from "react"
import { MdOutlineClose, MdSearch } from "react-icons/md";
import Button from '../utils/style-generators/buttonGenerator';
import getSearchImages from "../utils/api-functions/getSearchImages";
import { isSearchValidation } from "../utils/validations/SearchValidation";


const SearchOverlay = ({isSearchOpen, handleCloseSearch, handleImageSelected, view}) => {
	if(!isSearchOpen) {
		return null
	}

	const [searchString, setSearchString] = useState('');
	const [searchResult, setSearchResult] = useState([])
	const [hasSearched, setHasSearched] =useState(false)
	const [searchIsDirty, setSearchIsDirty] =useState(false)
	const [searchIsValid, searchErrorMessage] = isSearchValidation(searchString)
	const [imageAdded, setImageAdded] =useState(false)
	const matchingImages = searchResult ? [...searchResult] : []
	const visibleSearchError = searchIsDirty ? (!searchIsValid ? 'border border-red' : '') : ''

	const addedClass = imageAdded ? "absolute top-1/3 mx-auto border border-lightgray rounded-md h-32 w-fit flex items-center px-8 z-10 bg-lightwhite shadow-lg shadow-lightwhite" : "hidden"

	const handleOnChange = (event) => {	
		const lowerCaseValue =event.target.value.toLowerCase()
		setSearchString(lowerCaseValue)
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

	const addedMessage = () => {
		setImageAdded(true)
		setTimeout(() => {
			setImageAdded(false);
					}, 3000);
	}

	const handleImageClick = (image) => {
		handleImageSelected(image)
		addedMessage()
	}
	

	return (
		<section className="fixed inset-0 flex flex-col justify-start items-center bg-white bg-opacity-200 z-50 max-w-screen-lg lg:mx-auto lg:mt-40 lg:rounded-md">
			<div className="p-4 bg-white flex flex-col justify-start w-full"> 
				<div className="flex w-full justify-end cursor-pointer">
					<MdOutlineClose size={40} onClick={handleCloseSearch}/>
				</div>
				<div className="p-2 my-2">
					<h1 className="p-2 font-bold text-3xl mb-2">Sök efter bild</h1>
					<p>Välj vilken typ av bilder du vill se. Skriv sedan ett sökord som beskriver vad bilden ska användas till ex. frukost. </p>
				</div>
				<div className="relative m-1 flex-col">	
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
									onBlur={() => setSearchIsDirty(true)}
									className={`w-full h-9 text-lg ${visibleSearchError}`}
									/>
							</div>
						</label>
						<div className="h-10 pt-2 text-red"> {searchIsDirty ? searchErrorMessage  : ''} </div>
					<div className="text-center p-3 mt-8">
						<Button disabled={!searchString} onClick={handleSearch}>Sök</Button>
						<p className="mt-6 font-bold ">{hasSearched ?"Klicka på den bild du vill lägga till": ""}</p>
					</div>		
					<div>
					 	<ul className="max-w-xl p-4 sm:flex flex-cols"> 
							{matchingImages.length > 0 ? (
								matchingImages.map((image) => (
									<li className="max-w-60 bg-lightwhite m-3 rounded-md cursor-pointer"
									key={image.imageId} onClick={() => handleImageClick(image)} > 
									<img src={image.imageUrl} alt={image.alt} />
										<h3 className="text-center font-bold bg-white">{image.title}</h3>
								</li>

								))
							) : (
								hasSearched ? "Inga resultat matchade sökningen" : " "
							)}
						</ul> 
					</div>
				</div>
				
			</div>
			<div className={`${addedClass}`}>{!imageAdded ?<p></p>: <p>Bilden är tillagd i ditt schema</p> }</div>
		</section>
	)
}

export default SearchOverlay


/* Glöm inte att låsa knappen innan man sökt!!! */