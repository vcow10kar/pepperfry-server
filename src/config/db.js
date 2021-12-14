const mongoose = require("mongoose");

const env = require("dotenv").config();

let connect = () => {
    return mongoose.connect(
        `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@pepperfry-primary.zofnp.mongodb.net/pepperfry`
    );
};

module.exports = connect;