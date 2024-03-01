import { DynamoDB, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";



const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);


const tableName = "ImageTable"

export const handler = async (event) => {
	let body;
	let statusCode = 200;
	const headers = {
		"Content-Type": "application/json",
	};

	try {
		const imageId = event.pathParameters.imageId.toString();

		const getItemResponse = await dynamo.send(
			new GetCommand({
				TableName: tableName,
				Key: {
					"pk": "image",
					"imageId": "imageId"
				}
			})
		)


		if (!getItemResponse.Item) {
			statusCode = 404;
			//Item not found
			body = JSON.stringify({ message: `Image with id ${imageId} not found` });  
		} else {
			//Item found, return it
			body = JSON.stringify({ image: getItemResponse.Item })
		}
	} catch (error){
		statusCode = 500;
		body = JSON.stringify({ message: error.message || "Internal Server Error"})
		console.log("Error:", error);
	} finally {
		console.log("Response:", {statusCode, body, headers});
	}

	return {
		statusCode, 
		body, 
		headers,
	};
}