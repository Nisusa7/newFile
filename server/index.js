import  express  from "express";

import Connection from "./database/db.js";
const app= express();
const PORT=8000;

// const username= process.env.DB_USERNAME;
// const password= process.env.DB_PASSWORD;

// Connection(username, password);
app.get('/signup', function (req, res) {
    res.send('OK');
  })
app.listen(PORT, () => console.log(`running PORT ${PORT} hello`));

