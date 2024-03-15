

export async function deleteImage(imageId) {
	
	try {
			const response = await fetch(
			`https://gr0w2y8mmi.execute-api.eu-north-1.amazonaws.com/xteam/images/${imageId}`,
		{
			method: "DELETE", 
			headers: {
				"Content-Type": "application/json",
			}, 
		}
	)
		if(response.ok) {
			console.log('Image deleted successfully!')
		} else{
			console.error('Failed to delete image')
		}
	}catch (error) {
		console.error('Error when deleting image', error)
	}
}

export default deleteImage