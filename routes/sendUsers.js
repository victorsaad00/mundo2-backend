const axios = require("axios");

const sendUsers = async (req, res) => {
  try {
    const sendAllUsers = await axios.post("URL");
    res.status(200).json(getAllUsers.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = sendUsers;
