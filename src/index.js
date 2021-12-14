const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

module.exports = app;