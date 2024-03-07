import {useState} from "react"
import { MdOutlineClose, MdSearch } from "react-icons/md";

const SearchOverlay = ({isOpen, onClose}) => {
	const [selectedOption, setSelectedOption] = useState('true')

	return (
		<div className="p-5 bg-white grid">
			<MdOutlineClose/>
			<h1 className="font-bold">Sök efter bild</h1>
			<div className="">
				<label> 
					<input 
						type="radio" 
						value="all"
						checked={selectedOption === 'all'}
						onChange={() => setSelectedOption('all')}
						/>
						Alla bilder
				</label>
				<label>
					<input 
						type="radio"
						value="bw"
						checked={selectedOption === 'bw'}
						onChange={() => setSelectedOption('bw')}
						/>
						Svartvita
				</label>
				<label>
					<input 
						type="radio"
						value="color"
						checked={selectedOption === 'color'}
						onChange={() => setSelectedOption('color')}
						/>
						Färg
				</label>
			</div>
			<div>
				<h3 className="font-bold">Sök</h3>
				<p>Skriv ett eller flera sökord som beskriver vad bilden ska användas till, tex "frukost". </p>
				<MdSearch/>
				<input type="text border-lightgray"/>
				<button className="bg-darkblue text-white">Sök</button>
			</div>
			<div>
				<p>Klicka på den bilden du vill lägga till:</p>
				<div>här kommer bilden ut.</div>
			</div>
		</div>
	)
}

export default SearchOverlay