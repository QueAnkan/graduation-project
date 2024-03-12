import {useState} from "react"
import { MdOutlineClose, MdSearch } from "react-icons/md";
import Button from '../utils/style-generators/buttonGenerator';
import getSearchImages from "../utils/api-functions/getSearchImages";

const SearchOverlay = ({isSearchOpen, handleCloseSearch}) => {
	if(!isSearchOpen) {
		return null
	}

	const [selectedOption, setSelectedOption] = useState('true');
	const [searchString, setSearchString] = useState('');
	const [searchResult, setSearchResult] = useState('')

	const handleOnChange = (event) => {
	
		setSearchString(event.target.value)
	}

	const handleSearch = async () => {
		try{
			const search = await getSearchImages(searchString)
			setSearchResult(search)

		}catch (error) {
			console.error("Error getting search result:", error)
		}
		
		
	}	

	return (
		<section className="fixed inset-0 flex flex-col justify-start items-center bg-white bg-opacity-200 z-50 max-w-screen-lg lg:mx-auto lg:mt-40 lg:rounded-md">
			<div className="p-4 bg-white flex flex-col justify-start w-full"> 
				<div className="flex w-full justify-end">
					<MdOutlineClose size={40} onClick={handleCloseSearch}/>
				</div>
				<div className="p-2 my-2">
					<h1 className="p-2 font-bold text-3xl mb-2">Sök efter bild</h1>
					<p>Välj vilken typ av bilder du vill se. Skriv sedan ett sökord som beskriver vad bilden ska användas till ex. frukost. </p>
				</div>
				<div className="relative m-1 flex-col">	
					<div className="mb-3">
						<label> 
								<input 
									type="radio" 
									value="all"
									checked={selectedOption === 'all'}
									onChange={() => setSelectedOption('all')}
									className="m-2"
									/>
									Alla bilder
							</label>
							<label>
								<input 
									type="radio"
									value="bw"
									checked={selectedOption === 'bw'}
									onChange={() => setSelectedOption('bw')}
									className="m-2"
									/>
									Svartvita
							</label>
							<label>
								<input 
									type="radio"
									value="color"
									checked={selectedOption === 'color'}
									onChange={() => setSelectedOption('color')}
									className="m-2"
									/>
									Färg
							</label>
					</div>
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
						<p className="mt-4 ">Klicka på den bilden du vill lägga till</p>
					</div>
					<div className="mt-5">
						<p>här kommer bilderna ut.</p>
						<ul> 
							{searchResult.length > 0 ? (
								searchResult.map((image) => (
								<li key={image.imageId}> 
									<h3>{image.title}</h3>
									<img src={image.image} alt={image.alt} />
								</li>
								))
							) : (
								"Inga resultat matchade sökningen" 
							)}
						</ul>
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default SearchOverlay