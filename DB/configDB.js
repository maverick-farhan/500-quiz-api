const mongoose = require('mongoose');
const connect =()=>{
  mongoose.connect('mongodb+srv://euvDKyllgi7xzTAC:euvDKyllgi7xzTAC@cluster0.tbrppdl.mongodb.net/quiz?retryWrites=true&w=majority')
.then(()=>{
  console.log("connected")})
}
module.exports = connect;
