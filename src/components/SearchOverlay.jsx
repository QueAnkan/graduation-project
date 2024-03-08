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
		<section className="fixed inset-0 flex flex-col justify-start items-center bg-white bg-opacity-200 z-50">
			<div className="p-4 bg-white flex flex-col justify-around h-3/4">
				<div className="relative">
					<MdOutlineClose onClick={handleClose} className="size-10 fixed top right-8"/>
				</div>
				<div className="p-2 mt-2">
					<h1 className="p-2 font-bold text-3xl mb-2">Sök efter bild</h1>
					<label className="p-2"> 
						<input 
							type="radio" 
							value="all"
							checked={selectedOption === 'all'}
							onChange={() => setSelectedOption('all')}
							/>
							Alla bilder
					</label>
					<label className="p-2">
						<input 
							type="radio"
							value="bw"
							checked={selectedOption === 'bw'}
							onChange={() => setSelectedOption('bw')}
							/>
							Svartvita
					</label>
					<label className="p-2">
						<input 
							type="radio"
							value="color"
							checked={selectedOption === 'color'}
							onChange={() => setSelectedOption('color')}
							/>
							Färg
					</label>
				</div>
				<div className="p-2 m-2">		
					<label className="">
						<span className="font-bold text-1xl">Sök</span>
						<p className="mb-2">Skriv ett eller flera sökord som beskriver vad bilden ska användas till, tex "frukost". </p>
						<input 
							placeholder=""
							type="text" 
							class="border border-gray-300 rounded-md px-2 py-2 w-full "
							/>
						<MdSearch className="size-6 absolute top-1/4 left-9 transform -translate-y-1/2 text-gray-400" />
					</label>
					<Button>Sök</Button>
				</div>
				<div>
					<p>Klicka på den bilden du vill lägga till:</p>
				</div>
				<div>
				<p>här kommer bilden ut.</p>
				</div>
			</div>
		</section>
	)
}

export default SearchOverlay