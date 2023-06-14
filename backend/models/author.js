const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    }
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;