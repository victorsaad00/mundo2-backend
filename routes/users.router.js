const express = require("express");
const userController = require("../Controller/users.controller");

const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/updateUser", userController.updateUser);
router.get("/recoverPassword", userController.recoverPassword);

module.exports = router;
