import { useState } from "react";
import Button from '../utils/style-generators/buttonGenerator'

const Admin = () => {
	const [selectedOption, setSelectedOption] = useState('true');

	return(
	<section className="m-5">
		<div className="flex flex-col"> 
			<div className="m-2">
				<h1>Lägga till nya bilder i databasen</h1>
			</div>
			<label>
				<p>Välj fil: </p>
				<input
					type="file"
					accept="image/svg"
					onChange={(e) => {
						const files = e.target.files[0]
					}}
				/>
			</label>
			<br />
			<label>
				<span>Alternativ text</span>
				<p>Texten beskriver innehållet i bilden och hjälper personer med synnedsättning att förstå dess betydelse</p>
				<input
					type="text"
					placeholder="ex. " />
			</label>
			<br />
			<label>
				<span>Titel</span>
				<p>Skriv den titel som ska vara till bilden</p>
				<input
				type="text"
				placeholder="ex. frukost" />
			</label>

			<p>Ange om bilden är i färg eller svart/vit</p>
			<label>
				<input 
					type="checkbox"
					value="color"
					checked={selectedOption === 'color'}
					onChange={() => setSelectedOption('color')}
					className="m-2"
					/>
					Färgbild
			</label>
			<label>
				<input 
					type="checkbox"
					value="bw"
					checked={selectedOption === 'bw'}
					onChange={() => setSelectedOption('bw')}
					className="m-2"
					/>
					Svart/vit bild
			</label>
			<Button>Lägg till</Button>
		</div>
		<div className="flex flex-col">
			<p>För att ta bort en bild, sök i databasen</p>
			<label>
				<p>Sök</p>
				<input 
					type="text"/>
			</label>
			<div className="m-2">
					<p>Sökresultat</p>
				<div className="m-2">
					Här kommer bilden ut
				</div>
			</div>
		</div>
		</section>
	)
}

export default Admin