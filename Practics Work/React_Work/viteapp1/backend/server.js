
// const express = require('express');
import express from 'express';
import connect from './database/conn.js';
import userRouter from './routes/userRouter.js'


const app = express();

// define application port
const port = process.env.PORT || 7000;

app.get("/login", (req, res) => res.send("Welcome to the login page!"));
app.get("/signup", (req, res) => res.send("Welcome to the signpage page!"));
app.use("/", userRouter);
app.get("/", (req, res) => res.send("Welcome to the Backend Server!"));

app.get("*", (req, res) => res.send("Route does not exist!"));

app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`)
})

connect();