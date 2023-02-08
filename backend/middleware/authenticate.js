const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.evrythng;
    const verify = jwt.verify(token, "IHAVEAPENIHAVEANAPPLEAPPLEPEN");
    console.log(verify);
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = authenticate;
