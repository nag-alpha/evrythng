const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.evrythng;
    const verify = jwt.verify(token, "IHAVEAPENIHAVEANAPPLEAPPLEPEN");
    if (verify) {
      req.user = verify.id;
      next();
    }
  } catch (err) {
    return res.sendStatus(401);
  }
};

module.exports = authenticate;
