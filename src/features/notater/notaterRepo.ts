import { ObjectId } from 'mongoose';
import { INoteDTO, INoteUpdateDTO } from './notater';
const Notater = require('./NotaterModel')
class notaterRepo {
    
    getAllById = (id: number) => {
        return Notater.find({ relasjonsIdBruker: id })
    }
    getAll = () => {
        return Notater.find()
    }
    post = (note: INoteDTO) => {
        const newNote: INoteDTO = {
            relasjonsIdBruker: note.relasjonsIdBruker,
            title: note.title,
            text: note.text,
            dateAdded: new Date(new Date().getTime())
        }
        return Notater.create(newNote)
    }
    put = (id: ObjectId, note: INoteUpdateDTO) => {
        const data = {
            title: note.title,
            text: note.text
        }
        return Notater.findOneAndUpdate({ _id: id }, JSON.stringify(data), { new: true })
    }}
export default notaterRepo