const express = require('express');
const path = require("path");
const app = express();
const port = 8000;
//public static path

//console.log(path.join(__dirname, "../public/index.html"))
const Static_Path = path.join(__dirname, "../public");
app.set('view engine', 'hbs');
app.use(express.static(Static_Path));

//routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error");
});

app.listen(port, () => {
    console.log(`Heii, this is listning form the port ${port}`);
});