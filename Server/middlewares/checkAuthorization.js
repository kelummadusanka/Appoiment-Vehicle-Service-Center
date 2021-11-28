const jwt = require("jsonwebtoken");



exports.isUserAuth = async (req, res,next) => {

    console.log("insidse isUserAuth");
    const token = req.headers["x-access-token"];
    console.log(token);
    if (!token) {
      console.log("need a valid token!");
      res.status(401).send("You, need a valid token!");
    } else {
      jwt.verify(token, "secretKey", (err, decoded) => {
          console.log("token recieved");
        if (err) {
          console.log("token_err:"+err);
          res.status(401).json({
              
            message: "Authorization failed, login reqired",
            success: false,
          });
        }
        else{
          console.log("authorization is done!");
            req.userId = decoded.id;
            next();
        }
      });
    }
  };