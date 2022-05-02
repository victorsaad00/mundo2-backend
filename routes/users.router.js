const express = require("express");
const userController = require("../Controller/users.controller");

const router = express.Router();

router.get("/login", userController.login);
router.post("/register", userController.register);
router.get("/getUser", userController.getUser);
router.get("/recoverPassword", userController.recoverPassword);

module.exports = router;
