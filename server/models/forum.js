const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ForumSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        trim: true,

    },
    comentario: {
        type: String,
        required: true,
        trim: true
    },
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    fecha: Date,
    
}, {versionKey: false,
    timestamps: true});

ForumSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Foro", ForumSchema);
