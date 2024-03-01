import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, GetCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({}); 
const dynamo = DynamoDBDocumentClient.from(client); 

const tableName = "ImageTable";

export const handler = async (event) => {
	let body; 
	let statusCode = 200; 
	const headers = {
		"Content-Type": "application/json",
	}; 


  try {
	const imageId = event.pathParameters.imageId.toString()

	const getItemResponse = await dynamo.send(
		new GetCommand({
			TableName: tableName,
			Key: {
				"pk": "images",
				"imageId": imageId,
			},
		})
	);
	console.log("getItemResponse:", getItemResponse);
  
	if(!getItemResponse.Item) {
		//Item not found
		statusCode = 404;
		body = JSON.stringify({ message: "Image not found" }); 		 
	} else {
		console.log("Image exists, proceeding with deletion")

		await dynamo.send(
			new DeleteCommand({
				TableName: tableName, 
				Key: {
					"pk": "image",
					"imageId": "imageId"
				},
			})
		);
		body = `Deleted order with id: ${imageId}`
		}
	} catch (error) {
		statusCode = 500;
		body = error.message;
		console.log("Error:", error);
	}finally {
		console.log("Response:", {statusCode, body, headers});
		body = JSON.stringify(body)
	}
	return {
			statusCode,
			body,
			headers,
	};
}