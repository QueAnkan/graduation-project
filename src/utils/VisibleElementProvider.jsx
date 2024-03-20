import { createContext, useContext, useState } from "react";

const VisibleElement = createContext({
	isVisible: true, 
	toggleIsVisible: () => {},
});

export const useVisibilityStatus = () => useContext(VisibleElement)

const VisibleElementProvider = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleIsVisible = () => setIsVisible((isVisible) => !isVisible)

	return(
		<VisibleElement.Provider value = {{ isVisible, toggleIsVisible}}>
			{children}
		</VisibleElement.Provider>
	)
};

export default VisibleElementProvider