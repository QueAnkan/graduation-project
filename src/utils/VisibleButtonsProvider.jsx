import { createContext, useContext, useState } from "react";

const VisibleButtons = createContext({
	isVisible: true, 
	toggleIsVisible: () => {},
});

export const useVisibilityStatus = () => useContext(VisibleButtons)

const VisibleButtonsProvider = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleIsVisible = () => setIsVisible((isVisible) => !isVisible)

	return(
		<VisibleButtons.Provider value = {{ isVisible, toggleIsVisible}}>
			{children}
		</VisibleButtons.Provider>
	)
};

export default VisibleButtonsProvider