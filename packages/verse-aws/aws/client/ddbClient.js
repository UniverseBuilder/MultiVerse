import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromIni } from '@aws-sdk/credential-provider-ini';

const ddbClient = new DynamoDBClient({ credentials: fromIni() });
export { ddbClient };
