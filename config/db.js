const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/men')
.then(()=>{
   console.log("DataBase Connect Sucessfully")
})
.catch((err)=>{
   console.log("Error",err);
})

module.exports = connection