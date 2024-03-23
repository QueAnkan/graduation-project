import { uNameAtom, uPassAtom, isLoggedInAtom, isLoggingOutAtom, formIsDirtyAtom} from "../../data/atom";
import { useRecoilState } from "recoil";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import Button from '../style-generators/buttonGenerator'
import { useEffect } from "react";

const LogOut = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const [isLoggingOut, setIsLoggingOut] = useRecoilState(isLoggingOutAtom)
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUPass] = useRecoilState(uPassAtom)
	const [formIsDirty, setFormIsDirty] = useRecoilState(formIsDirtyAtom)

	console.log("Är inloggad: ", isLoggedIn)
	
	const handleOnclick = () => {	
		setIsLoggedIn(false)
		setIsLoggingOut(true)
		setUName('');
		setUPass('');
		setFormIsDirty(false)
		console.log('Loggat ut', isLoggedIn)
	}
	if (isLoggingOut) {
		
		return <Navigate to="/login" />
		
	}

	return(
		<div>			
			<Button onClick={handleOnclick}> Logga Ut </Button>
		</div>
	)
}

export default LogOut