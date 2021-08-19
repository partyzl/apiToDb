const {Pool} = require('pg');

const pool = new Pool({
    host: 'db',
    user: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

module.exports = pool;