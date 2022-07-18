import handler from "../util/handler.js";
import dynamoDb from "../util/dynamoDb.js";

export const main = handler(async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.authorizer.iam.cognitoidentity.id,
        },
    };

    const result = await dynamoDb.query(params);

    return result.Items;
});