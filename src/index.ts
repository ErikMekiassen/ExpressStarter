require('dotenv').config()
import notescontroller from './features/notater/notaterController';
import brukercontroller from './features/bruker/brukerController';
import loadDataClass from './modules/loadData';
const loadData = new loadDataClass();
const express = require('express');
const app = express();
const mongoose = require('mongoose')

app.use(express.json());
app.use('/notes', notescontroller);
app.use('/bruker', brukercontroller);


console.log("process.env.MONGO_URI", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI?.toString())
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err: any) => {
    console.log(err)
  }) 
loadData.loadBrukere(10);
loadData.loadNotater(10);