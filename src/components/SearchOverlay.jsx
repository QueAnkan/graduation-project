import {useState} from "react"
import { MdOutlineClose, MdSearch } from "react-icons/md";
import Button from '../utils/style-generators/buttonGenerator';

const SearchOverlay = ({isOpen, onClose}) => {
	const [selectedOption, setSelectedOption] = useState('true');
	const [inputSearch, setInputSearch] = useState('');

	const handleClose = () => {
		setSelectedOption('true')
		onClose(); 
	}

	return (
		<section className="fixed inset-0 flex flex-col justify-start items-center bg-white bg-opacity-200 z-50 max-w-screen-lg lg:mx-auto lg:mt-40 lg:rounded-md">
			<div className="p-4 bg-white flex flex-col justify-start w-full"> 
				<div className="flex w-full justify-end">
					<MdOutlineClose size={40} onClick={handleClose}/>
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
						<label>
							<span className="font-bold text-1xl">Sök</span>
							<div className="flex items-center border border-darkgray rounded-md px-2 py-2 "> 
								<div className="h-8 w-8">
									<MdSearch size={30}/>
								</div>
								<input
									placeholder="ex. frukost"
									type="text" 
									className="w-full h-9 text-lg"
									/>
							</div>
						</label>
					<div className="text-center p-3">
						<Button>Sök</Button>
						<p className="mt-4 ">Klicka på den bilden du vill lägga till</p>
					</div>
					<div className="mt-5">
						<p>här kommer bilden ut.</p>
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default SearchOverlay