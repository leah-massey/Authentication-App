const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    requird: [true, "Please provide and Email!"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password!"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
