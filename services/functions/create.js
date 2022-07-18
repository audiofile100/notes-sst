import handler from "../util/handler.js";
import dynamoDb from "../util/dynamoDb.js";
import * as uuid from "uuid";

export const main = handler(async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            userId: event.requestContext.authorizer.iam.cognitoidentity.id,
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now(),
        },
    };

    await dynamoDb.put(params);

    return params.Item;
})