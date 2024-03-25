
 export async function putNewImage(alt, color, image, title) {

	try {
		const response = await fetch(
			'https://gr0w2y8mmi.execute-api.eu-north-1.amazonaws.com/xteam/images', 
			{
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
							"user": "admin"
						} ]
				}),
			}
		); 
		if (!response.ok){
			throw new Error('Failed to post new image')
		}
			const data = await response.json(); 
	}catch (error) {
		console.error('Error posting data:' , error.message)
	}
} 

