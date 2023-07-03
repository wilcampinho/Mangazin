var mysql = require("mysql");

const database = {
  host: bd_host,
  user: bd_user,
  password: bd_password,
  database: bd_database,
};

var connection = mysql.createPool(database);

const customQuery = (sqlQuery) => {
  return new Promise((resolve, reject) => {
    connection.query(sqlQuery, (err, result) => {
      if (err) {
        reject(err);
      } else resolve(result);
    });
  });
};

module.exports = {
  customQuery,
};
