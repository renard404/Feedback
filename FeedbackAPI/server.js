const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
var feedbackRouter = require("./routes/feedback")

mongoose.connect("mongodb://localhost:27017/Feedback")
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
})

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to application." });
});
app.use("/feedback", feedbackRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
