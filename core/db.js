const sql = require("mssql");
const dotenv = require('dotenv').config({path: "./.env"});

const IP = process.env.IP;

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: process.env.SQL_NAME,
  port: parseInt(process.env.SQL_PORT, 10),
  server : process.env.SQL_SERVER,
  options: {
    enableArithAbort: true,
    encrypt: true
  }
};

const poolPromise = new sql.ConnectionPool(config, (err) => {
  if (err) {
    console.log(`Unexpected error : ${err}`);
    throw new Error("Cannot connect to MSSQL database");
  } else {
    console.log("Connected to MSSQL Database");
    console.log(`Username : ${config.user}, Server : ${config.server}, PORT: ${config.port}, IP: ${IP}`);
  }
});

module.exports = { config, poolPromise };
