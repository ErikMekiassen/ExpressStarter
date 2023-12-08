import notescontroller from './notater/notaterController';
import brukercontroller from './bruker/brukerController';
const express = require('express');
const app = express();

app.use(express.json());

app.get('/hellos', (req, res) => {
    res.send('Hello World!');
})

app.use('/notes', notescontroller);
app.use('/bruker', brukercontroller);

app.listen(8080, () => {
    console.log('Listening on port 8080');
})