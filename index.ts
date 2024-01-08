import notescontroller from './notater/notaterController';
import brukercontroller from './bruker/brukerController';
const { loadBrukere, loadNotater } = require('./loadData');

const express = require('express');
const app = express();

app.use(express.json());


app.use('/notes', notescontroller);
app.use('/bruker', brukercontroller);

app.listen(8070, () => {
    console.log('Listening on port 8070');
})
loadBrukere(10)
loadNotater(10)
