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

    await dynamoDb.delete(params);

    return { status: true };
});