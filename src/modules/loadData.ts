const postData = {
  key1: 'value1',
  key2: 'value2',
};

const apiUrl = 'http://localhost:8070';
const headers = {
  'Content-Type': 'application/json',
};

export default class loadData {
    loadBrukere = async (times: number) => {
        for (let i = 0; i < times; i++) {
            try {
                const response = await fetch(apiUrl + "/bruker", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "brukernavn": `fake_user${i}`,
                        "fornavn": `John${i}`,
                        "etternavn": "Doe",
                        "epost": "john.doe@example.com",
                        "telefonnummer": "+1 1234567890"
                    }),
                });
                console.log('Response bruker:', response.status);
                if (!response.ok) {
                    console.error('Error:', response.statusText);
                }
            } catch (error: any) {
                console.error('Error:', error.message);
            }
        }
    };
    
    loadNotater = async (times: number) => {
        for (let i = 1; i < times + 1; i++) {
            try {
                const response = await fetch(apiUrl + "/notes", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "relasjonsIdBruker": `${i}`,
                        "title": `Helo World loop: ${i}`,
                        "text": `This has happened ${i} times since nodemon refreshed omg`,
                    }),
                });
                console.log('Response notater:', response.status);
                if (!response.ok) {
                    console.error('Error:', response.statusText);
                }
            } catch (error: any) {
                console.error('Error:', error.message);
            }
        }
    };
}