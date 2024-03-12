

const getSearchImages = async () => {
	try{
		const response = await fetch(
			`https://gr0w2y8mmi.execute-api.eu-north-1.amazonaws.com/xteam/images/search?${searchString}`
		)

		if (!response.ok) {
			throw new Error("Failed to fetch data")
		}
		const data = await response.json()
		console.log("Data from search:", data);
		return data
	} catch (error) {
		console.error("Error fetching data:", error.message)
	}
}