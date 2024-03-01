import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({}); 
const dynamo = DynamoDBDocumentClient.from(client); 


export const handler = async () => {
	const tableName = "ImageTable";
	const partitionKey = "images" //pk value


	try {
		const { Items } = await dynamo.send(
			new QueryCommand({
				TableName: tableName, 
				KeyConditionExpression: "pk = :pk", 
				ExpressionAttributeValues: {
					":pk": partitionKey,
				},
			})
		); 
		return {
			statusCode: 200, 
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({ items: Items})
		};
	} catch (error) {
		return {
			statusCode: error.statusCode || 500,
			headers: { "Contetn-Type": "application/json" },
			body: JSON.stringify({ message: error.message || "Internal Server Error"}),
		};
	}
};