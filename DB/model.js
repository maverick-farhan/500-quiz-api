const mongoose = require('mongoose');
const {Schema} = mongoose;
const schema = new Schema(
  {
    quiz:String,
    answer:String
  }
);
const Model = new mongoose.model('funquizzes',schema);
module.exports = Model;

