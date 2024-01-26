import { INote, INoteDTO } from './notater';
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotaterSchema: INoteDTO = new Schema({
    relasjonsIdBruker: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Notater', NotaterSchema)