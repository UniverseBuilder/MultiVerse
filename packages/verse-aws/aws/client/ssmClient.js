const { SSMClient} =from "@aws-sdk/client-ssm";
const { fromIni } = require('@aws-sdk/credential-provider-ini');

const ssmClient = new SSMClient({ credentials: fromIni() });

module.exports = { ssmClient };
