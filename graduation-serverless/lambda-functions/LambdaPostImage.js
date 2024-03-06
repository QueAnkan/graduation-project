import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"


const client = new DynamoDBClient({})
const dynamo = DynamoDBDocumentClient.from(client)

export const handler = async (event) => {
	const tableName = "ImageTable"

	const requestBody = JSON.parse(event.body)
	
	try {
		if (!requestBody.items || requestBody.items.length === 0) {
		throw new Error(
			"Invalid request body. 'items' array is missing or empty. "
			)
		}

		// Fungerar inte! Kan inte läsa toString och utan så blir imageId NaN

		if (!requestBody.items.title && typeof requestBody.items.title === "string" && !requestBody.color && typeof requestBody.color === "string"){
		throw new Error("Invalid requst body, imageId is not a string")
		}
		
			const imageId = requestBody.items.title + requestBody.color
console.log("imageId:", imageId);			

			const newItem = {
				PK: "images",
				imageId: imageId,
				alt: requestBody.items[0].alt,
				color: requestBody.items[0].color,
				image: requestBody.items[0].image,
				title: requestBody.items[0].title,
				user: requestBody.items[0].user
			}

		console.log("newItem:", newItem);
			
		

		await dynamo.send(
			new PutCommand({
				TableName: tableName,
				Item: newItem,
			})
		)

		return {
			statusCode: 200,
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({ message: "Data inserted successfully"})
		};
	} catch (error) {
		return {
			statusCode: error.statusCode,
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({ message: error.message}),
		}
	}

}