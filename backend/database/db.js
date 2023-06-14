const mongoose = require("mongoose");
const uri = "mongodb+srv://serapErkan:123@blogdb.p6nocuc.mongodb.net/"

const connection = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
        .then(() => console.log(" MongoDb bağlantısı başarılı"))
        .catch((err) => console.log("Baglantı hatası " + err.message));

}

module.exports = connection;