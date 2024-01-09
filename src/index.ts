import notescontroller from './features/notater/notaterController';
import brukercontroller from './features/bruker/brukerController';
import loadDataClass from './modules/loadData';
const loadData = new loadDataClass();
const express = require('express');
const app = express();

app.use(express.json());


app.use('/notes', notescontroller);
app.use('/bruker', brukercontroller);

app.listen(8070, () => {
    console.log('Listening on port 8070');
});
loadData.loadBrukere(10);
loadData.loadNotater(10);