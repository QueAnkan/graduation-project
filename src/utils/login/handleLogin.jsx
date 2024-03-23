// import { useState } from "react"
import {useRecoilState, useRecoilValue} from 'recoil'
import { user } from "../../data/data"
import { formIsDirtyAtom, uNameAtom, uPassAtom } from '../../data/atom'

const users = [...user]

console.log('users', users)


export const NameInput = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)

	const handleNameChange = (event) => {
		setUName(event.target.value)
	}
	return (
		<div className="flex flex-col">
			<label htmlFor="username">Användarnamn
			<br />
			<input
				type="text"
				value={uName}
				id="username"
				onChange={handleNameChange}
				className="border border-darkblue rounded-lg p-1"
				required/>
			</label>
		</div>
	)
}

export const PassInput = () => {
	const [uPass, setUPass] = useRecoilState(uPassAtom)

	const handlePassChange = (event) => {
		setUPass(event.target.value)
	}

	return (
		<div className="mb-20">
			<label htmlFor="password">Lösenord
			<br />
			<input
				type="password"
				value={uPass}
				id="password"
				onChange={handlePassChange}
				className="border border-darkblue rounded-lg p-1"
				required/>
			</label>
		</div>
	)
}



export const IsMatching = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUpass] = useRecoilState(uPassAtom)

	console.log('Användarnamn:', uName)
	console.log('Lösenord:', uPass)

	const match = users.find(user => user.name === uName && user.password === uPass)

	if(match !== undefined) {
		console.log('matchningen lyckades!')
		console.log('matchningen lyckades:', match !== undefined);
		return true 
	} else {
		console.log('matchningen misslyckades!')
	
		return false 
	}
}