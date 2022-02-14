const jwt = require("jsonwebtoken");

const generateToken = (User) => {
  const token = jwt.sign({ ...User }, "i", { expiresIn: "604800" });
  return token;
};


const accessToken = (req, res, next) => {
  const token = req.headers.cookie.split("=")[1];
  const decoded = jwt.verify(token, "i");
  req.data = decoded;
  next();
};


module.exports = generateToken, accessToken