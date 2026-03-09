// const express = require("express");
import express from "express";
import 'dotenv/config';
import webRoutes from "./routes/web.";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//config router 
webRoutes(app);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} with address http://localhost:${PORT}`);
});