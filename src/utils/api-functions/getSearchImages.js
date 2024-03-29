
const getSearchImages = async (searchString) => {
	try{
		const response = await fetch(
			`https://gr0w2y8mmi.execute-api.eu-north-1.amazonaws.com/xteam/images/search?searchString=${searchString}`
		)
		if (!response.ok) {
			throw new Error("Failed to fetch data")
		}

		const dataArray = await response.json();

        const images = dataArray.map(item => {
            const imageUrl = item.image ? `https://xteam-images-bucket.s3.eu-north-1.amazonaws.com/${item.image}` : null;
            return { imageUrl, title: item.title, alt: item.alt, imageId: item.imageId, color: item.color };
        });

        return images; 

	} catch (error) {
		console.error("Error fetching data:", error.message)
	}
}

export default getSearchImages