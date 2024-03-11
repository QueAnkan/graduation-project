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

       /*  const params = {
            TableName: tableName,
            IndexName: 'TitleIndex', 
            KeyConditionExpression: 'contains(lowercase(#title),  :searchString)',
            ExpressionAttributeNames: {
                '#title': 'title',
            },
            ExpressionAttributeValues: {
                ':searchString': lowerCaseSearchString,
            },
        };
        console.log("params:", params); */
        
    /* const command = new QueryCommand(params) */
    const data = await dynamo.send(new QueryCommand({
        TableName: tableName,
        IndexName: 'TitleIndex', 
        KeyConditionExpression: 'begins_with(#title, :searchString)',
        ExpressionAttributeNames: {
            '#title': 'title',
        },
        ExpressionAttributeValues: {
            ':searchString': lowerCaseSearchString,
        },
    })
    )
    console.log(data.Items)
       /*  const data = await dynamo.query(params).promise(); */
        return {
            statusCode: 200,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ message: 'Internal server error' }),
        };
    }
}