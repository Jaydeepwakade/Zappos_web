
require("dotenv").config()
const express = require("express")
const connectionTodb = require("./dbconnection")
const authrouter = require("./routes/Login&signup/auth.route")
const server = express()

server.use(express.json())
server.use("/auth",authrouter)
server.get("/", (req, res) => {
    res.json({ message: "Hello world" })
})



server.listen(process.env.PORT, async () => {
    try {
        await connectionTodb()
        console.log("server is running", process.env.PORT)

    } catch (error) {
        console.log(error.message)
    }

})


