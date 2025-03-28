const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    database: 'postgres', 
    password: 'cdac',
    port: 5432,
  });
  

  global.db = pool;

  module.exports = pool;