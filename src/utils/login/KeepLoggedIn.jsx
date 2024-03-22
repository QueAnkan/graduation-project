import { isLoggedInAtom, isLoggingOutAtom} from "../../data/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const KeepLoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
const [isLoggingOut, setIsLoggingOut] = useRecoilState(isLoggingOutAtom)

	
	useEffect(() => {
		if (!isLoggedIn && !isLoggingOut ) {
			setIsLoggingOut(true)
			setIsLoggedIn(true)
			setIsLoggingOut(false)
			
		}
	}, [isLoggedIn, setIsLoggedIn, setIsLoggingOut])

	return(
		null
	)
}

export default KeepLoggedIn