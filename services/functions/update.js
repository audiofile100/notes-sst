import handler from "../util/handler.js";
import dynamoDb from "../util/dynamoDb.js";

export const main = handler(async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            userId: event.requestContext.authorizer.iam.cognitoidentity.id,
            noteId: event.pathParameters.id,
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":attachment": data.attachment || null,
            ":content": data.content || null,
        },

        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});