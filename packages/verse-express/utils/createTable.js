function createTable(tableName, hashKey, hashKeyType) {
  const params = {
    TableName: tableName,
    KeySchema: [{ AttributeName: hashKey, KeyType: "HASH" }],
    AttributeDefinitions: [
      { AttributeName: hashKey, AttributeType: hashKeyType },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  DynamoDB.createTable(params, function (err, data) {
    if (err) {
      console.error("Unable to create table", err);
    } else {
      console.log("Created table", data);
    }
  });
}

module.exports = {
  createTable,
};
