// const express = require("express");
import express from "express";
import 'dotenv/config';
import webRoutes from "./routes/web";
import initDatabase from "config/seed";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";
import configPassportLocal from "./middleware/passport.local";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//config body parser (must be before passport so req.body is available)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static file
app.use(express.static("public"));

//config session
app.use(session({
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    secret: "son tung mtp",
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(new PrismaClient, {
        checkPeriod: 1 * 24 * 60 * 60 * 1000,
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: (sessionID: string) => sessionID,
    })
}));

//config flash
app.use(flash());

//config passport
app.use(passport.initialize());
app.use(passport.authenticate('session'));
configPassportLocal();

//
//config global variable
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
})
// config router
webRoutes(app);

//sedding data
initDatabase();

// handle 4004 not found 
app.use((req, res, next) => {
    res.status(404).render("Status/404");
})
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} with address http://localhost:${PORT}`);
});