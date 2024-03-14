
 export async function putNewImage(alt, color, image, title) {

	try {
		const response = await fetch(
		'https://gr0w2y8mmi.execute-api.eu-north-1.amazonaws.com/xteam/images', {
			method: 'PUT', 
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
					"items": [ {
						"alt": alt,
						"color": color,
						"image": image,
						"title": title,
					} ]
			}),
		}); 
		if (!response.ok){
			throw new Error('Failed to post new image')
		}
			const data = await response.json(); 
			console.log(data); 
	}catch (error) {
		console.error('Error posting data:' , error.message)
	}
} 


/* 
export async function putNewImage(altinput, colorinput, image, titleinput) {
	const alt = altinput.toString()
	const color = colorinput.toString()
	const title = titleinput.toString()

    try {
        const formData = new FormData();
        formData.append('alt', alt);
        formData.append('color', color);
        formData.append('image', image);
        formData.append('title', title);

        const response = await fetch(
            'https://gr0w2y8mmi.execute-api.eu-north-1.amazonaws.com/xteam/images', {
            method: 'PUT', 
            body: formData, // Skicka FormData-objektet direkt som body
        }); 
        if (!response.ok){
            throw new Error('Failed to post new image')
        }
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error('Error posting data:' , error.message)
    }
}


 */

