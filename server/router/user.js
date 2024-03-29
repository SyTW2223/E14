const express = require("express");
const UserController = require("../controllers/user");
const md_auth = require("../middlewares/authenticated");
const api = express.Router();

api.get("/user/me",[md_auth.asureAuth], UserController.getMe);
api.get("/users", [md_auth.asureAuth], UserController.getUsers);
api.delete("/user/:id", [md_auth.asureAuth], UserController.deleteUser);
api.get("/user/:nickname", [md_auth.asureAuth], UserController.getSingleUser);
api.patch("/user/update/:id", [md_auth.asureAuth], UserController.updateUser);
api.patch("/user/remove/:id", [md_auth.asureAuth], UserController.removeDataUser);

module.exports = api;
