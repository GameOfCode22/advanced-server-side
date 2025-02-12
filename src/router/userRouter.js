const express = require("express");
const userRouter = express.Router();
const userService = require("../service/userService");

const PATH = "/api/v1/user";

userRouter.get(PATH, async (_, res) => {
  await userService.getUsers(_, res);
});

userRouter.get(`${PATH}/:id`, async (req, res) => {
  await userService.getUserId(req, res);
});

userRouter.post(PATH, async (req, res) => {
  await userService.addUser(req, res);
});

userRouter.put(`${PATH}/:id`, async (req, res) => {
  await userService.updateUser(req, res);
});

userRouter.delete(`${PATH}/:id`, async (req, res) => {
  await userService.deleteUser(req, res);
});

module.exports = userRouter;