const app = require('express');

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Express is departing at ${port}`));