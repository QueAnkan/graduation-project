import {useRecoilState} from 'recoil'
import { useState } from 'react'
import {Navigate} from 'react-router-dom'
import { NameInput, PassInput, IsMatching } from "../utils/login/handleLogin"
import { uNameAtom, uPassAtom, isLoggedInAtom, isDisabledAtom, formIsDirtyAtom } from '../data/atom'
import Button from "../utils/style-generators/buttonGenerator"

const Login = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUPass] = useRecoilState(uPassAtom)
	const [shouldNavigate, setShouldNavigate] = useState(false)
	const [formIsDirty, setFormIsDirty] = useRecoilState(formIsDirtyAtom)
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const [isDisabled, setIsDisabled] = useRecoilState(isDisabledAtom)

	const loginMatch = IsMatching()
	const isLoggedInMessage = isDisabled ? 'Du är redan inloggad, logga först ut om du vill logga in som annan användare' : ''
	const loginErrorMessage = formIsDirty ? 'Vänligen kontrollera inloggningsuppgifterna' : ''

	const handleSubmit = (event) => {
		event.preventDefault()
		if(isLoggedIn) {
			setIsDisabled(true)
		} else if (loginMatch) {
			setShouldNavigate(true)
			setUPass('')
			setFormIsDirty(false)
			setIsLoggedIn(true); 
		} else {
			setFormIsDirty(true);
		}

		}
	if (shouldNavigate) {
		return <Navigate to='/admin' />

	}

	return (
		<section className="bg-white mt-10 p-2 mb-20 border border-darkgray w-full md:w-[400px]">
			<div className="p-10 ">
				<form className="flex flex-col items-center p-2 mb-5">
					<h1 className="text-xl font-bold">Logga in</h1>
					<br />
					<NameInput />
					<br />
					<PassInput />
					<Button 
						type="submit"
						disabled={isDisabled}
						onClick={handleSubmit}
						>Logga in</Button>
					<div>{loginErrorMessage}</div>
					<div>{isLoggedInMessage}</div>
				</form>
			</div>
		</section>
	)
}

export default Login