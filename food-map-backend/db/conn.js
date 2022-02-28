const dotenv=require('dotenv');
const mongoose=require('mongoose');

//connect with hidden.env file
dotenv.config({path:'./hidden.env'});

// get url from mongodb atlas ->url stores inside hidden.env file 
const db=process.env.db_url;

//db connect
mongoose.connect(db,{useNewUrlParser:true},(err,res)=>{
  if(err){
     return console.log('unable to connect mongoose');
  }
  console.log('mongoose connection successful');
 });
 
