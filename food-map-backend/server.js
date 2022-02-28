require("./db/conn.js");
require("./model/schema.js");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());

const port = process.env.port || 5000;

app.use(express.json());
//link with router file
app.use(require("./router/route"));

//middleware
// const middleware=(req,res,next)=>{
//  console.log('From middleware');
//  next();
// }

app.listen(port, () => {
  console.log("Server running at http://localhost:5000");
});
