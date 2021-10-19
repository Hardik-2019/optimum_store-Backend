const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Router = require("./router");

const cors = require('cors');
app.use(cors())
app.use(express.json());

var url = "mongodb+srv://Hardik_Garg:hamper2000@cluster0.ws5d0.mongodb.net/optimum_store";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('',Router);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=> 
    console.log(`Server running at port number ${PORT}`)
)