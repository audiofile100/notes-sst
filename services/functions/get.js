import handler from "../util/handler.js";
import dynamoDb from "../util/dynamoDb.js";

export const main = handler(async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            userId: event.requestContext.authorizer.iam.cognitoidentity.id,
            noteId: event.pathParameters.id,
        },
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("Item not found.");
    }

    return result.Item;
});