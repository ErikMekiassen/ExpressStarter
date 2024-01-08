import { INote } from './notes';
import fs from 'fs';

let currentDate = new Date(new Date().getTime());
let data: Array<INote> = [
  {
    "id": 1,
    "relasjonsIdBruker": 1,
    "title": "Note 1",
    "text": "Lorem ipsum dolor sit amet.",
    "dateAdded": currentDate 
  },
  {
    "id": 2,
    "relasjonsIdBruker": 2,
    "title": "Note 2",
    "text": "Consectetur adipiscing elit.",
    "dateAdded": currentDate 
  },
  {
    "id": 3,
    "relasjonsIdBruker": 1,
    "title": "Note 3",
    "text": "Sed do eiusmod tempor incididunt.",
    "dateAdded": currentDate 
  },
  {
    "id": 4,
    "relasjonsIdBruker": 1,
    "title": "Note 4",
    "text": "Ut enim ad minim veniam.",
    "dateAdded": currentDate 
  },
  {
    "id": 5,
    "relasjonsIdBruker": 1,
    "title": "Note 5",
    "text": "Duis aute irure dolor in reprehenderit.",
    "dateAdded": currentDate 
  }
];

export default data;