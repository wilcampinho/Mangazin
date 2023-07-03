const DynamoDBService = require("../../Services/DynamoDBService");

exports.addUser = (email, password) => {
  let sqlQuery = `INSERT INTO users ('email', 'password') VALUES ('${email}', '${password}');`;
  return DynamoDBService.customQuery(sqlQuery);
};
