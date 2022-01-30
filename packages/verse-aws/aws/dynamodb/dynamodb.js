// Import required AWS SDK clients and commands for Node.js
import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from '../credentials/ddbClient';
import * as sharedIniFileLoader from '@aws-sdk/shared-ini-file-loader';

// Set the parameters
export const params = {
  TableName: 'JOURNALS', //TABLE_NAME
};

export const listTables = async () => {
  console.log(process.env);
  const homedir = await sharedIniFileLoader.getHomeDir();
  console.log(homedir);
  const profiles = await sharedIniFileLoader.loadSharedConfigFiles({
    filepath: 'C:\\Users\\Krish\\.aws\\credentials',
    configFilepath: 'C:\\Users\\Krish\\.aws\\config',
  });
  console.log(profiles);
  const data = await ddbClient.send(new GetItemCommand(params));
  return data;
  console.log('Success', data.Item);
};
