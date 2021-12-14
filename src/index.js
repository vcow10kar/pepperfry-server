const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/Passport");

const brandController = require("./controllers/brand.controller");
const categoryController = require("./controllers/category.controller");
const cartController = require("./controllers/cart.controller");
const cartDetailsController = require("./controllers/cartDetails.controller");
const productsController = require("./controllers/products.controller");
const userController = require("./controllers/user.controller");

const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/brands", brandController);
app.use("/category", categoryController);
app.use("/cart", cartController);
app.use("/cartDetails", cartDetailsController);
app.use("/products", productsController);
app.use("/auth", userController);

//sessions middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);

//passport middleware
app.use(passport.session());

module.exports = app;
