const express = require("express");
const app = express();
app.use(express.static("public"));

//---- ROUTES ----

//---- PAGES ----

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

//---- API ----

app.get("/api/time", (req, res) => {
    const arkhipovDate = new Date("1962-10-27")
    res.send({ data: arkhipovDate})
});

//---- PORT ----

const PORT = 8080;

app.listen(PORT, (error => {
    if (error){
        console.log(error);
        return;
    }
    console.log("Server is running on port:", PORT);
}));