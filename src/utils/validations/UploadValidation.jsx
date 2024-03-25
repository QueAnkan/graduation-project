
export function isTitleValid(text) {
	const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö1234567890 '

	const isCharAllowed = (char) => allowedChars.includes(char)

	const isCharValid = Array.from(text).every(isCharAllowed)
	
	if (!isCharValid) {
		return [false, 'Vänligen använd endast bokstäver och siffror i titeln.']
	}
	else if(text.length <1) {
		return [false, "*Fältet måste vara ifyllt."]
	}

	return [true, '']
}

export function isAltValid (text) {

	const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö1234567890,.- '

	const isCharAllowed = (char) => allowedChars.includes(char)

	const isCharValid = Array.from(text).every(isCharAllowed)
	
	if (!isCharValid ) {
		return [false, 'Vänligen använd endast bokstäver och siffror i texten.']
	}
	else if(text.length < 1 || text.length > 120 ) {
		return [false, '*Fältet måste vara ifyllt. Skriv en kort alternativ bildtext med max 120 tecken.']
	}
	
	return [true, '']
}


