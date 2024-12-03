const express = require("express");
const morgan = require("morgan");
const userModel = require('./models/user.js')
const dbConnection = require('./config/db.js')
const app = express();
const port = 3000;


app.use(morgan('dev'))


app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))



app.set("view engine","ejs")


app.get('/',(req,res)=>{
  res.render("index");
})

app.get('/about',(req,res)=>{
  res.render("about")
})

app.get("/register",(req,res) =>{
   res.render("register")
})

app.post('/register',(req,res)=>{
  if(req.body){
    console.log(req.body);
    res.send("User Register")

  }

    
})

app.post('/get-form-data',(req,res)=>{
       console.log(req.body);
       
})

app.listen(port,()=>{
  
  console.log(`Your Server is Running on this ${port} port no.....`);
  
})