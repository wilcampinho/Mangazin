const User = new (require("../../inMemory/User"))();

exports.addUser = async (
  req: { body: { id: number; email: any; password: any } },
  res: any
) => {
  return Promise.resolve()
    .then(async () => {
      return User.addUser(req.body.id, req.body.email, req.body.password);
    })
    .catch((err) => {});
};
