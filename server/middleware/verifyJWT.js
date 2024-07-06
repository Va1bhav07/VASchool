const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  //   const authHeader = req.headers["authorization"];
  const token = req.cookies?.jwt;
  console.log("token :>> ", token);
  if (!token)
    return res.status(401).send({
      message: "Unauthorized",
    });
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // console.log("err :>> ", err);
        res.clearCookie("jwt");
        return res.sendStatus(403);
      }
      console.log("decoded work here:>> ", decoded);
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log("cokkie error in catch :>> ", error);
    res.clearCookie("jwt");
    return res.redirect("/");
  }
};

module.exports = verifyJWT;
