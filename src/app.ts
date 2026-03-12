// const express = require("express");
import express from "express";
import 'dotenv/config';
import webRoutes from "./routes/web";
import getConnection from "./config/database";
import initDatabase from "config/seed";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//config body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static file
app.use(express.static("public"));

// config router
webRoutes(app);

//sedding data
initDatabase();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} with address http://localhost:${PORT}`);
});