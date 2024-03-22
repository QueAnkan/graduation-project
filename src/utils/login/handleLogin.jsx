// import { useState } from "react"
import {useRecoilState, useRecoilValue} from 'recoil'
import { user } from "../../data/data"
import { formIsDirtyAtom, uNameAtom, uPassAtom } from '../../data/atom'

const users = [...user]


export const NameInput = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)

	const handleNameChange = () => {
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

	const handlePassChange = () => {
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

	const match = users.find(user => user.name === uName && user.password === uPass)

	if(match !== undefined) {
		return true 
	} else {
		return false 
	}
}