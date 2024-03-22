import { uNameAtom, uPassAtom, isLoggedInAtom, isLoggingOutAtom, isDisabledAtom} from "../../data/atom";
import { useRecoilState } from "recoil";
import { NavLink } from "react-router-dom";
import Button from '../style-generators/buttonGenerator'

const LogOut = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const [isLoggingOut, setIsLoggingOut] = useRecoilState(isLoggingOutAtom)
	const [isDisabled, setIsDisabled] = useRecoilState(isDisabledAtom)
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUPass] = useRecoilState(uPassAtom)

	const handleOnclick = () => {	
		setIsLoggedIn(false)
		setIsLoggingOut(true)
		setIsDisabled(false)
		setUName('')
	}

	return(
		<div className="logout-container">
			<NavLink 
				to='/login'
				onClick={handleOnclick}>
				<Button> Logga Ut </Button>
			</NavLink>
		</div>
	)
}

export default LogOut