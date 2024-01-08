const fetch = require('node-fetch');

const apiUrl = 'http://localhost:8070';
const headers = {
  'Content-Type': 'application/json',
};


const loadBrukere = async (times: number) => {
    for (let i = 0; i < times; i++) {
        try {
        const response = await fetch(apiUrl + "/bruker", {
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
    } catch (error: any) {
        console.error('Error:', error.message);
    }
    };
}
const loadNotater = async (times: number) => {
    for (let i = 0; i < times; i++) {
        try {
        const response = await fetch(apiUrl + "/notes", {
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
    } catch (error: any) {
        console.error('Error:', error.message);
    }
    };
}
module.exports = loadData
