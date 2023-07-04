var mysql = require("mysql");

const database = {
  host: "host",
  user: "user",
  password: "password",
  database: "database",
};

var connection = mysql.createPool(database);

const customQuery = (sqlQuery: any) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlQuery, (err: any, result: unknown) => {
      if (err) {
        reject(err);
      } else resolve(result);
    });
  });
};

module.exports = {
  customQuery,
};
