const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiSchema = new Schema({
    id: {
        type: Number,
        requred: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
}, {timestamps: true});

const Api = mongoose.model('api', apiSchema);
module.exports = Api;