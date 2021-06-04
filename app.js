const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.listen(port, () => console.log("servidor responde en puerto 3030"))
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname,"/views/index.html")));
app.get("/maradona", (req, res) => res.sendFile(path.join(__dirname,"/views/maradona.html")));
app.get("/pele", (req, res) => res.sendFile(path.join(__dirname,"/views/pele.html")));
app.get("/messi", (req, res) => res.sendFile(path.join(__dirname,"/views/messi.html")));
app.get("/cristiano", (req, res) => res.sendFile(path.join(__dirname,"/views/cristiano.html")));
app.get("/Johan", (req, res) => res.sendFile(path.join(__dirname,"/views/johan.html")));
app.get("/Ronaldo", (req, res) => res.sendFile(path.join(__dirname,"/views/ronaldo.html")));
app.get("/Zidane", (req, res) => res.sendFile(path.join(__dirname,"/views/zidane.html")));
