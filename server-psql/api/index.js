const app = require('./server');
const { Pool } = require('pg');

const port = process.env.PORT || 3000;
const pool = new Pool();

app.listen(port, ()=>console.log(`Express is departing at ${port}`));