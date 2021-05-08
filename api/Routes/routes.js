const express = require("express");
const authUser = require("../middleware");
const userController = require("../controller"); 

const router = express.Router();

router.post("/register",userController.create);

router.post("/login", userController.login);

router.get("/data",authUser,userController.dataList);

module.exports = router;
