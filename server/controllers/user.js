const  User  = require("../models/user");

async function getMe(req, res) {
  const {user_id} = req.user;
  const response = await User.findById(user_id)
  
  if(!response) {
    res.status(400).send({msg: "No se ha encontrado usuario"});
  } else{
    res.status(200).send(response)
  }
}

async function getUsers(req, res) {
  //const { active } = req.query;
  let response = null;
  response = await User.find();

  res.status(200).send(response);
}

async function deleteUser(req, res) {
  const { id } = req.params;

  User.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(400).send({msg: "Error al eliminar el usuario especificado"});
    } else {
      res.status(200).send({msg: "Eliminacion del usuario satisfactoria"});
    }
  })
}

module.exports = {
  getMe,
  getUsers,
  deleteUser,
};
