const express = require('express'); 
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4030;
const connect = require('./DB/configDB.js');
connect();
const Model = require('./DB/model.js')
app.use(express.json());
app.use(cors());


app.get('/api',async (req,res)=>{
 const result = await Model.find();
  res.json(result);
});

app.post('/api',async(req,res)=>{
  let result = await new Model(req.body);
  result = await result.save();
  res.json(result);
})

app.listen(PORT,()=>{
  console.log(`Server running at ${PORT}`)
})
