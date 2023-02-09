const mongoose = require("mongoose");

const userCredentialSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Credential = mongoose.model("Credential", userCredentialSchema);

module.exports = Credential;
