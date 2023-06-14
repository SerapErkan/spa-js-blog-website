const mongoose = require("mongoose");

const socialMediaSchema = new mongoose.Schema({
    socialMediaUrl: {
        type: String,
        required: true,
    },
    socialMediaImg: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});

const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);

module.exports = SocialMedia;