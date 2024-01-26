import data from './notaterDB';
import { INote, INoteDTO } from './notater';
const Notater = require('./NotaterModel')
class notaterRepo {
    
    getAllById = (id: number) => {
        return data.filter(it => it.relasjonsIdBruker == id)
    }
    getAll = () => {
        return data
    }
    post = (note: INoteDTO) => {
        const newNote: INote = {
            relasjonsIdBruker: note.relasjonsIdBruker,
            title: note.title,
            text: note.text,
            dateAdded: new Date(new Date().getTime())
        }
        return data.push(newNote)
    }
    put = (id: string, note: INoteDTO) => {
        const index = data.findIndex(note => note.id.toString() === id)
        data[index].title = note.title
        data[index].text = note.text
        return data
    }
}
export default notaterRepo