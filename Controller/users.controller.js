const axios = require("axios");
const userModel = require("../Models/user.model");

const userController = {
  login: async (req, res) => {
    try {
      const userCredentials = new userModel(req.body);

      const findUser = await userModel.findOne({
        email: userCredentials.email,
      }); // pega do banco

      if (findUser) {
        if (
          userCredentials.email === findUser.email &&
          userCredentials.password === findUser.password
        ) {
          return res.status(200).json("Usuario logado com sucesso!");
        } else {
          return res.status(203).json("Email ou senha incorretos!");
        }
      } else {
        return res.status(404).json("Usuario não encontrado!");
      }
    } catch (error) {
      console.log(error);
      return res.json({ error: error });
    }
  },

  register: async (req, res) => {
    try {
      const user = new userModel(req.body);

      const findUser = await userModel.findOne({
        email: user.email,
      });

      if (!findUser) {
        await user.save();
        return res.status(200).send("Usuario cadastrado com sucesso!");
      } else {
        return res.status(400).send("Usuário já cadastrado!");
      }
    } catch (error) {
      console.log(error);
      return res.json({ error: error });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { email } = new userModel(req.body);
      const findUser = await userModel.findOne({
        email: email,
      }); // pega do banco

      if (findUser) {
        await findUser.updateOne(req.body);
        return res.status(200).send("Usuário atualizado com sucesso!");
      } else {
        return res.status(400).send("Usuário não encontrado!");
      }
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
