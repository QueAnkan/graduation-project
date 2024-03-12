import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand} from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "ImageTable"

export  const handler = async (event) => {
    try {

        const { searchString } = event.queryStringParameters || {};
        console.log("searchString:", searchString);

        const lowerCaseSearchString = searchString ? searchString.toLowerCase() : '';
        console.log("lowerCaseSearchString:", lowerCaseSearchString);

    
    const data = await dynamo.send(new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: '#PK = :PK AND begins_with(#imageId, :searchString)',
        ExpressionAttributeNames: {
            '#PK': 'PK',
            '#imageId': 'imageId',
        },
        ExpressionAttributeValues: {
            ':PK': 'images',
            ':searchString': lowerCaseSearchString,
        },
    })
    )
    console.log(data)
   
        return {
            statusCode: 200,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        console.log("Error:", error);
        return {
            statusCode: 500,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ message: 'Internal server error' }),
            
        };
    }
}