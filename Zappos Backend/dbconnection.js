

const moongose = require("mongoose")

const connectionTodb = async()=>{
     try {
       await moongose.connect(process.env.MONGO_URL)
      console.log("connected to the database")
     } catch (error) {
        console.log(error.message)
     }
}

module.exports = connectionTodb