const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    displayName: {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true}
    },

    image: {
      type: String,
    },

    email: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
