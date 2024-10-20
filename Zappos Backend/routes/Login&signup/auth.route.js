
const express = require("express")
const userModel = require("../../models/users/user.model")
const authrouter = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


authrouter.post("/register", async (req, res) => {


     const { Name, email, password, phone } = req.body




     try {

          const user = await userModel.findOne({ $or: [{ email }, { phone }] })
          if (user) {
               if (user.email === email) {
                    return res.status(500).json({ message: "email is allready registered " })
                    console.log(user.email)
               }
               else if (user.phone === phone) {
                    return res.status(500).json({ message: "phone number is allready in use please enter another number " })
               }
          }


          const hashPassword = await bcrypt.hash(password, 8)
          const newuser = await userModel({
               Name,
               email,
               password: hashPassword,
               phone,
          })
          await newuser.save()
          console.log(newuser)
          res.status(201).json({ message: "user created succesfully", user: newuser })
     } catch (error) {
          console.log(error.message)
     }
}
)
//login route 
authrouter.post("/login", async (req, res) => {
     const { email, password } = req.body
     try {
          const user = await userModel.findOne({ email })
          if (!user) {
               return res.status(401).json({ message: "user is not found please register" })
          }
          const decodedPasword = await bcrypt.compare(password, user.password)
          if (!decodedPasword) {
               return res.status(401).json({ message: "password does not match or invalid email" })
          }
          const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRETKEY, {
               expiresIn: "1d"
          })
          res.status(201).json({ token: token, decodedPasword, user })
     } catch (error) {
          res.status(500).json({ message: error.message })
     }
})


module.exports = authrouter