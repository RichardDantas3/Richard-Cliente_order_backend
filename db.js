const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'client_order_system',
    connectionLimit:10
});

module.export = pool;