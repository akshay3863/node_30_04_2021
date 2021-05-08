const userModel = require("../Model/user.model");

module.exports = {
  login: (data) => {
    return userModel.findOne({
      username: data.username,
      password: data.password,
    });
  },
  create: (data) => {
    return userModel.create(data);
  },
  dataList: () => {
    return userModel.find({});
  },
};
