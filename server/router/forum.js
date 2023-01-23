const express = require("express");
const ForumController = require("../controllers/forum");
const md_auth = require("../middlewares/authenticated");
//const multiparty = require("connect-multiparty")  //Creo que es para IMG quiza borrar

//const md_upload = multiparty({ uploadDir: "./uploads/forum"});

const api = express.Router();

api.post("/forum", [md_auth.asureAuth], ForumController.createPost); //El poner [md_auth.asureAuth] hace que solo accedan los autenticados
api.get("/forum", ForumController.getPost); //Este por tanto es publico para todos
api.get("/forum/:nickname", ForumController.getPostByUser); //Este por tanto es publico para todos
api.delete("/forum/:id", [md_auth.asureAuth], ForumController.deletePost); //Este por tanto es publico para todos

module.exports = api;