const express = require("express");
const userRouter = express.Router();
const userService = require("../service/userService");

const PATH = "/api/v1/user";

userRouter.get(PATH, async (_, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

userRouter.get(`${PATH}/:id`, async (req, res) => {
  const user = await userService.getUserId(req.params.id);
  res.json(user);
});

userRouter.post(PATH, async (req, res) => {
  const user = await userService.addUser(req.body);
  res.json(user);
});

userRouter.put(`${PATH}/:id`, async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json(user);
});

userRouter.delete(`${PATH}/:id`, async (req, res) => {
  const isSuccess = await userService.deleteUser(req.params.id);
  res.json({
    isSuccess: isSuccess,
  });
});


module.exports = userRouter;