

export function isSearchValidation(searchString) {
	const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö1234567890'

	const isCharAllowed = (char) => allowedChars.includes(char)

	const isCharValid = Array.from(searchString).every(isCharAllowed)
	
	if (!isCharValid) {
		return [false, 'Vänligen använd endast bokstäver och siffror i din sökning.']
	}

	return [true, '']
}
