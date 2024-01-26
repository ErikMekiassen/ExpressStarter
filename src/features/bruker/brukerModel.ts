import { IBruker, IBrukerDTO, INyBrukerDTO } from './bruker';
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BrukerSchema: IBruker = new Schema({
    brukernavn: {
        type: String,
        required: true
    },
    fornavn: {
        type: String,
        required: true
    },
    etternavn: {
        type: String,
        required: true
    },
    epost: {
        type: String,
        required: true
    },
    telefonnummer: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Bruker', BrukerSchema)