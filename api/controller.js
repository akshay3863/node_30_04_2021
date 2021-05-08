const userService = require("./service/service");
const jwt = require("jsonwebtoken");
const jwtKey = "jwtKey";

const Login = (req, res) => {
  var data = req.body;
  userService
    .login(data)
    .then((result) => {
      if (result && result.username) {
        jwt.sign({ result }, jwtKey, { expiresIn: "60m" }, (err, token) => {
          res.json({
            success: 1,
            message: "login successfuly",
            token: token,
          });
        });
      } else {
        res.json({
          success: 0,
          message: "Login failed.",
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const Registration = (req, res) => {
  const body = req.body;
  userService
    .create(body)
    .then((result) => {
      if (result.username) {
        jwt.sign({ result }, jwtKey, { expiresIn: "60m" }, (err, token) => {
          res.json({
            success: 1,
            message: "data inserted successfuly...",
            token: token,
          });
        });
      } else {
        res.json({
          success: 0,
          message: "Insertion not done...",
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const GetData = (req, res) => {
  userService
    .dataList()
    .then((result) => {
      if (result.length > 0) {
        res.json({
          success: 1,
          message: "success",
          data: result,
        });
      } else {
        res.json({
          success: 0,
          message: "Data not found ☺",
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  login: Login,
  create: Registration,
  dataList: GetData,
};
