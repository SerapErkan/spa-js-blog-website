
const express = require("express");
const SubScribe = require("../models/subScribe");
const router = express.Router();



router.post("/subScribe", async (req, res) => {

    try {

        const { email } = req.body;
        let result = await SubScribe.find({ email: email })
        if (result.length == 0) {
            let sb = new SubScribe();
            sb.email = email;
            sb.save();
        }

        res.json({ message: "Email başarıyla listeye eklendi!" });

    } catch (err) {

        res.stats(500).json({ message: console.err.message })
    }


});

module.exports = router;


