const  User  = require("../models/user");

async function getMe(req, res) {
  const {user_id} = req.user;
  const response = await User.findById(user_id);
  //console.log(user_id);
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


async function getSingleUser(req, res) {
  //console.log("ESTO ES GET SINGLE USER");
  const { nickname } = req.params;
  //console.log(nickname);

  const response = await User.find({nickname: `${nickname}`}).exec();
  if(!response) {
    res.status(400).send({msg: `No se ha encontrado usuario ${nickname}`});
  } else{
    console.log(response);
    res.status(200).send(response)
  }
}

async function updateUser(req, res){
  const { id } = req.params;
  const userData = req.body;

  //Password
  // Avatar

  User.findByIdAndUpdate({_id: id}, { $push: userData}, (error) => {
    if(error) {
      res.status(400).send({msg: "Error al actualizar el usuario"});
    }else {
      res.status(200).send({ msg: "Actualización correcta"});
      console.log(userData);
    }
  });
}

async function removeDataUser(req, res){
  const { id } = req.params;
  const userData = req.body;

  //Password
  // Avatar

  User.findByIdAndUpdate({_id: id}, { $pullAll: userData}, (error) => {
    if(error) {
      res.status(400).send({msg: "Error remover los datos del usuario"});
    }else {
      res.status(200).send({ msg: "Actualización correcta"});
    }
  });
}

module.exports = {
  getMe,
  getUsers,
  deleteUser,
  updateUser,
  removeDataUser,
  getSingleUser,
};
