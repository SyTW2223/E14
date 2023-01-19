const ForumPost = require("../models/forum");

function createPost (req, res) {
    const post = new ForumPost(req.body);
    post.fecha = new Date();


    post.save((error, postStored) => {
        if (error) {
            res.status(400).send({ msg: "Error el crear el mensaje" });
        } else {
            res.status(201).send(postStored);
        }
    })
}

function getPost (req, res) {
    const {page = 1, limit = 10} = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: {fecha: "desc"},
    }

    ForumPost.paginate({}, options, (error, postStored) => {
        if (error) {
            res.status(400).send({ msg: "Error al obtener los mensajes" });
        } else {
            res.status(200).send(postStored);
        }
    })
}

function deletePost (req, res) {
    const { id } = req.params;
    ForumPost.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({ msg: "Error al eliminar el mensaje" });
        } else {
            res.status(200).send({ msg: "Eliminacion Satisfactoria"});
        }
    }) 
}

module.exports = {
    createPost,
    getPost,
    deletePost,
};