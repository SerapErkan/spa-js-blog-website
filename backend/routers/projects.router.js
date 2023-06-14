const express = require("express");
const Projects = require("../models/projects");
const router = express.Router();



router.get("/getProjects", async (req, res) => {

    try {

        let results = await Projects.find();
        res.json(results[0]);

    } catch (err) {

        res.stats(500).json({ message: console.err.message })
    }


});

module.exports = router;










