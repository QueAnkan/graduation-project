import { useState, useEffect } from "react";
import SearchOverlay from "./SearchOverlay";
import ImageContainer from "./ImageContainer";
import Button from "../utils/style-generators/buttonGenerator";
import { saveImagesToLocalStorage, getImagesFromLocalStorage } from "./WeekdayCard";

const DetailedView = (props) => {

	const { view, openSearchOverlay } = props;

	const [selectedImages, setSelectedImages] = useState(getImagesFromLocalStorage(view));
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Övrig kod här...

	function handleImageSelected(selectedImage) {
		
        const updatedImages = [...selectedImages, selectedImage];
        setSelectedImages(updatedImages);
        saveImagesToLocalStorage(view, updatedImages);
    }

	return(

		<>
		hej
		<Button onClick={openSearchOverlay}>Lägg till bild</Button>
            {/* Övrig JSX här */}
            {isSearchOpen && (
                <SearchOverlay
                    isSearchOpen={isSearchOpen}
                    handleCloseSearch={handleCloseSearch}
                    handleImageSelected={(selectedImage) => handleImageSelected(selectedImage, 'DetailedView')}
					mode="detailed"
                />
            )}
        </>
	)
}

 export default DetailedView