const express = require('express');
const app = express();
app.listen(1000, function(){
  console.log('bloq')
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const url = "mongodb+srv://bloq:bloq@cluster0-xtjsv.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "Bloq";
