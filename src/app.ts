// const express = require("express");
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("Hello World! haha");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} with address http://localhost:${PORT}`);
});