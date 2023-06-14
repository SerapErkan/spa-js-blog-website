const mongoose = require("mongoose");



let abilities = [
    {
        image: "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn",
        title: "HTML"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        title: "JavaScript"
    },
    {
        image: "https://play-lh.googleusercontent.com/ajbmMCoaThQcD4_z-1-6H79M0ItJ1Vz2jW_5yRB_eb1d_Fdzmdci0SPHFfujQj23n-Q",
        title: "CSS"
    },
    {
        image: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png",
        title: "JQuery"
    }
]


const abilitySchema = new mongoose.Schema({
    abilityImg: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});


const Ability = mongoose.model("Ability", abilitySchema);



function checkAbilityRecords() {
    Ability.find().then(res => {
        if (res.length == 0) {
            for (let ab of abilities) {
                let ability = new Ability();
                ability.abilityImg = ab.image;
                ability.title = ab.title;
                ability.save();
            }
        }
    })
}

checkAbilityRecords();


module.exports = Ability;