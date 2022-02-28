const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const user = require("../model/schema");

router.get("/", (req, res) => {
  res.send("from router");
});

//using promises

// router.post('/register',(req,res)=>{
//   //  console.log(req.body);
//   //  res.send({message:req.body});
//   const{name,email,phone,work,password,confirm_password}=req.body;
//   if(!name || !email|| !phone|| !work|| !password|| !confirm_password){
//     return res.status(422).json({error:'One field missing'});
//   }
// user.findOne({email:email})
// .then((userExit)=>{
//    if(userExit){
//      return res.status(422).json({error:'Email already exist'});
//    }
//   const obj=new user({
//     name:name,
//     email:email,
//     phone:phone,
//     work:work,
//     password:password,
//     confirm_password:confirm_password
//   })
//   obj.save().then(()=>{
//   console.log(obj);
//   res.status(201).json({Success:"Registration Successful"});
//   }).catch((err)=>
//   res.status(500).json({result:"Registration failed"}));
// }).catch(err=>{
//   console.log(err);
// })
// });

//using async await

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, address, password } = req.body;

  if (!name || !email || !address || !password) {
    return res.status(422).json({ error: "field missing" });
  }
  try {
    const userExit = await user.findOne({ email: email });

    if (userExit) {
      return res.status(422).json({ error: "Email already exist" });
    } else {
      const obj = new user({
        name: name,
        email: email,
        password: password,
        address: address,
      });

      await obj.save();
      res.status(500).json({ result: "Registration Success" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"login successful"});
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "login invalid" });
    }
    const userlogin = await user.findOne({ email: email });
    // console.log(userlogin);

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);
      if (!isMatch) {
        res.status(422).json({ error: "user error pass" });
      } else {
        res.status(500).json({ result: "user login successful" });
      }
    } else {
      res.status(422).json({ error: "user error email" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
