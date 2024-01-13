import { IBruker } from './bruker';
import fs from 'fs';

let currentDate = new Date(new Date().getTime());
let data: Array<IBruker> = [
  {
    "id": 1,
    "brukernavn": "Note 1",
    "fornavn": "Lorem ipsum dolor sit amet.",
    "etternavn": "Mekiassen", 
    "epost": "emekiasse@gmail.com",
    "telefonnummer": "46299513", 
    "dateAdded": currentDate, 
  }
];

export default data;