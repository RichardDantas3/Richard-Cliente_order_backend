const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'R071207d',
    port: 3306,
    database: 'client_order_system',
    connectionLimit: 10
});

module.exports = pool;