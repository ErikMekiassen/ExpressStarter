const fetch = require('node-fetch');

const postData = {
  key1: 'value1',
  key2: 'value2',
};

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
module.exports = loadData
