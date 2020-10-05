const express = require('express');
const app = express();

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running...");
});
