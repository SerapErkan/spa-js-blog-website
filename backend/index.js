
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/db");
app.use(cors());
app.use(express.json()); // -json formatı. 


//router

const authorRouther = require("./routers/author.router");
const abilityRouter = require("./routers/ability.router");
const contactRouter = require("./routers/contact.router");
const projectsRouter = require("./routers/projects.router");
const socialMediaRouter = require("./routers/socialMedia.router");
const subScribeRouter = require("./routers/subScribe.router");


app.use("/api/getAuthor", authorRouther);
app.use("/api/getAbilities", abilityRouter);
app.use("/api/getProjects", projectsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/getSocialMedia", socialMediaRouter);
app.use("/api/subScribe", subScribeRouter);





// Localhost:5000/ --deneme
// app.get("/", (req, res) => {
//     res.json({ message: "Api isteği yapıldı" })
// })


connection();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(" Backend http://localhost:5000/ portunda çalışıyor...!"));


