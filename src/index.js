const express = require('express');
const cors = require("cors");

const brandController = require('./controllers/brand.controller');
const categoryController = require('./controllers/category.controller');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use('/brands', brandController)
app.use('/category',categoryController)


module.exports = app;