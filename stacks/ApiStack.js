import {StorageStack} from "./StorageStack";
import {Api, use} from "@serverless-stack/resources";

export function ApiStack({ stack, app }) {

    const { table } = use(StorageStack);

    const api = new Api(stack, "Api", {
        defaults: {
            function: {
                permissions: [table],
                environment: {
                    TABLE_NAME: table.tableName,
                },
            },
        },
        routes: {
            "POST /notes": "functions/create.main",
        }
    });

    stack.addOutputs({
        ApiEndpoint: api.url,
    });

    return {
        api,
    };
}