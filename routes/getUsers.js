const axios = require("axios");

const getUsers = async (req, res) => {
  try {
    const getAllUsers = await axios.get("URL");
    res.status(200).json(getAllUsers.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = getUsers;
