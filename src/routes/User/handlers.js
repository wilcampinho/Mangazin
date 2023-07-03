const UserModel = new (require("../../models/UserModel"))();

exports.addUser = async (req, res) => {
  return Promise.resolve()
    .then(async () => {
      return UserModel.addUser(req.body.email, req.body.password);
    })
    .catch((err) => {});
};
