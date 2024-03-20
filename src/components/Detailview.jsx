import { useState } from "react";
import getBgColor from "../utils/style-generators/getBackgroundColor";
import SearchOverlay from "./SearchOverlay";
import Button from "../utils/style-generators/buttonGenerator";
import { IoArrowUndo } from "react-icons/io5"


const DetailView = (props) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	// function openSearchOverlay() {
	// 	setIsSearchOpen((isSearchOpen) =>!isSearchOpen)
	// }
	
	function handleCloseSearch() {
		setIsSearchOpen(false)
	}
	// function handleCloseDetailview() {
	// 	navigate
	// }

	return (
		<>
			<section>
			<Button 
				style="transparent">
				<p><IoArrowUndo size={20}/></p>
				<p>Stäng vyn</p>
			</Button>
			</section>
		{isSearchOpen && (<SearchOverlay
							isSearchOpen={isSearchOpen}
							handleCloseSearch={handleCloseSearch}
							/>)}
		</>
	)
}

export default DetailView