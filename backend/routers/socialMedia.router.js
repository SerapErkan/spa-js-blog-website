const express = require("express");
const SocialMedia = require("../models/socialMedia");
const router = express.Router();



router.get("/getSocialMedia", async (req, res) => {

    try {

        let results = await SocialMedia.find();
        res.json(results[0]);

    } catch (err) {

        res.stats(500).json({ message: console.err.message })
    }


});

module.exports = router;








