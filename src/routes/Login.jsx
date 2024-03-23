import {useRecoilState} from 'recoil'
import { useState, useEffect } from 'react'
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
		
		const loginErrorMessage = formIsDirty ? 'Vänligen kontrollera inloggningsuppgifterna' : ''
		const loginMatch = IsMatching()
		
		
		const handleSubmit = (event) => {
			console.log('handlesubmit anropas')
			event.preventDefault()
			console.log('Logging match 2', loginMatch)
			if(loginMatch) {
				console.log('Logging match 2', loginMatch)
				setShouldNavigate(true)
				setIsLoggedIn(true)
				setFormIsDirty(false)
				console.log('Logged in successfully. isLoggedIn:',isLoggedIn);
			} else {
				setFormIsDirty(true);
			}
		
			}
		if (shouldNavigate) {
			return <Navigate to='/admin' />
		
		}

		// useEffect(() => {
		// 	console.log('useEffect triggered. isLoggedIn:', isLoggedIn);
		// 	if(isLoggedIn) {
		// 		return <Navigate to="/admin" />
		// 	}
		// }, [isLoggedIn])
		// console.log('Logging match 3', loginMatch)

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
						onClick={handleSubmit}
						>Logga in</Button>
					<div>{loginErrorMessage}</div>
				</form>
			</div>
		</section>
		
    );
}

export default Login