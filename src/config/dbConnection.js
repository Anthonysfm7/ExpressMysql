const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '40.84.213.44',
    user: 'root',
    password: 'bossing*2012',
    database: 'spotify'
  });
}