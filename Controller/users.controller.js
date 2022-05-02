const axios = require("axios");

const userController = {
  login: async (req, res) => {
    try {
      return res.status(200).json("hello");
    } catch (error) {
      console.log(error);
      return res.json({ error: error });
    }
  },

  register: async (req, res) => {
    try {
      return res.status(200).json("hello");
    } catch (error) {
      return res.json({ error: error });
    }
  },

  getUser: async (req, res) => {
    try {
      return res.status(200).send("hello");
    } catch (error) {
      return res.json({ error: error });
    }
  },

  recoverPassword: async (req, res) => {
    try {
      return res.status(200).send("hello");
    } catch (error) {
      return res.json({ error: error });
    }
  },
};

module.exports = userController;
