const axios = require("axios");
const userModel = require("../Models/user.model");

const userController = {
  login: async (req, res) => {
    try {
      return res.status(200).json("login");
    } catch (error) {
      console.log(error);
      return res.json({ error: error });
    }
  },

  register: async (req, res) => {
    const user = new userModel(req.body);
    try {
      await user.save();

      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.json({ error: error });
    }
  },

  getUser: async (req, res) => {
    try {
      return res.status(200).send("getUser");
    } catch (error) {
      return res.json({ error: error });
    }
  },

  recoverPassword: async (req, res) => {
    try {
      return res.status(200).send("Recover");
    } catch (error) {
      return res.json({ error: error });
    }
  },
};

module.exports = userController;
