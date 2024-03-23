
// import {fileType} from "file-type";

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


/* export function isFileValid (file) {

	if (!file) {
	  return [false, 'Ingen fil vald.'];
	}
  
	const jpegHeader = 'data:image/jpeg;base64,';
  if (!file.startsWith(jpegHeader))  {
	  return [false, 'Felaktigt filformat. Vänligen välj en fil med formatet JPG, JPEG.'];
	}
  
	return [true, ''];
  }
 */

/*   export function isFileValid(base64String) {
	if (!base64String) {
	  return [false, "Ingen fil vald."];
	}
  
	const arrayBuffer = new Uint8Array(atob(base64String.split(',')[1]).split('').map(char => char.charCodeAt(0)));
	const fileInfo = fileType(arrayBuffer);
  
	if (fileInfo.mime !== "image/jpeg") {
	  return [false, "Felaktigt filformat. Vänligen välj en fil med formatet JPG, JPEG."];
	}
  
	return [true, ""];
  } */