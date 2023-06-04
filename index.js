const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(
    ()=>{
        console.log("mongodb connected");
    }
)
.catch(err=>console.log(err))

app.use("/api/auth", authRoute)

app.listen("5000", ()=>{
    console.log("Server started on port 5000...");
})