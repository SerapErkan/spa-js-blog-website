const express = require("express");
const Contact = require("../models/contact");
const router = express.Router();



router.post("/contact", async (req, res) => {

    try {

        const contact = new Contact(req.body);
        let date = new Date();
        date.setHours(date.getHours() + 3);
        contact.date = date;
        await contact.save();
        res.json({ message: "Mailiniz başarıyla gönderildi!" });

    } catch (err) {

        res.stats(500).json({ message: console.err.message })
    }


});

module.exports = router;




