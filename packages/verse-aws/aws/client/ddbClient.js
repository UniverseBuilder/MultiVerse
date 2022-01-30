const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { fromIni } = require('@aws-sdk/credential-provider-ini');

const ddbClient = new DynamoDBClient({ credentials: fromIni() });

module.exports = { ddbClient };
