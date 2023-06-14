const express = require("express");
const Ability = require("../models/abilitiy");
const router = express.Router();


router.get("/getAbilities", async (req, res) => {

    try {

        let results = await Ability.find();
        res.json(results[0]);

    } catch (err) {

        res.stats(500).json({ message: console.err.message })
    }


});

module.exports = router;










