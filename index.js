const express = require('express');
const app = express();
const routes = require("./routes/index");

app.use('/user', routes)

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page is not found on this particular server</h1>")
})

app.listen(8000);