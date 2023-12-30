import notescontroller from './notater/notaterController';
import brukercontroller from './bruker/brukerController';


const apiUrl = 'http://localhost:8070/bruker';
const headers = {
  'Content-Type': 'application/json',
};
const loadData = async (times: number) => {
    for (let i = 0; i < times; i++) {
        try {
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "brukernavn": `fake_user${i}`,
            "fornavn": `John${i}`,
            "etternavn": "Doe",
            "epost": "john.doe@example.com",
            "telefonnummer": "+1 1234567890"
        }), 
        });
        console.log('Response:', response.status);
        if (!response.ok) {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
    };
}
//const loadData = require('./loadData');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/hellos', (req, res) => {
    res.send('Hello World!');
})

app.use('/notes', notescontroller);
app.use('/bruker', brukercontroller);

app.listen(8070, () => {
    console.log('Listening on port 8070');
})
loadData(10)
