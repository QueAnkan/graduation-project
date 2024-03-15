import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { DynamoDBDocumentClient, GetCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({}); 
const dynamo = DynamoDBDocumentClient.from(client); 
const s3Client = new S3Client({})

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
				"PK": "images",
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

		const s3Key = getItemResponse.Item.image;
		await s3Client.send(
			new DeleteObjectCommand({
				Bucket: "xteam-images-bucket",
				Key: s3Key,
			})
		);


		await dynamo.send(
			new DeleteCommand({
				TableName: tableName, 
				Key: {
					"PK": "images",
					"imageId": imageId
				},
			})
		);
		body = `Deleted image with id: ${imageId}`
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