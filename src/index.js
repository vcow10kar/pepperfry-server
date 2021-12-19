const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/Passport");

const brandController = require("./controllers/brand.controller");
const categoryController = require("./controllers/category.controller");
const cartController = require("./controllers/cart.controller");
const cartDetailsController = require("./controllers/cartDetails.controller");
const productsController = require("./controllers/products.controller");
const userController = require("./controllers/user.controller");
const orderController = require('./controllers/order.controller');

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/brands", brandController);
app.use("/category", categoryController);
app.use("/cart", cartController);
app.use("/cartDetails", cartDetailsController);
app.use("/products", productsController);
app.use("/auth", userController);
app.use("/order", orderController);

const User = require("./models/user.model");

//sessions middleware


//passport middleware


passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});


module.exports = app;
