// const express = require("express");
import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello World! haha");
});

app.listen(port, () => {
    console.log(`App listening on port ${port} with address http://localhost:${port}`);
});