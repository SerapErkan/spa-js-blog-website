const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
    projectImg: {
        type: String,
        required: true
    },
    projectUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const Projects = mongoose.model("Projects", projectsSchema);
module.exports = Projects;
