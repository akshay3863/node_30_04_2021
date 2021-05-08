const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtKey = "jwtKey";

const authRoutes = (req, res, next) => {
  const header = req.headers["authorization"];
  if (header !== undefined) {
      req.token = header;
      jwt.verify(req.token, jwtKey, (err, authData) => {
        if (err) {
          res.json({
            result: err,
          });
        } else next();
      });
  }
  else{
      res.send({"result":"Please provide token"})
  }
};

module.exports = authRoutes;