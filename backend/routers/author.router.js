const express = require("express");
const Author = require("../models/author");
const router = express.Router(); // Parantezleri ekleyin

router.get("/getAuthor", async (req, res) => {
    try {
        let results = await Author.find();
        res.json(results[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

