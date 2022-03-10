const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email: {
        type: String,
    },
    title: {
        type: String,
    },
    message: {
        type: String,
    },
    last_name: {
        type: String,
    },
    first_name: {
        type: String,
    },
}, {timestamps: true});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;