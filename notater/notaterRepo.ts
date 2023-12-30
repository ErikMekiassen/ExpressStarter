import data from './notaterDB';
import { INote, INoteDTO } from './notes';
class notaterRepo {

    getAllById = (id) => {
        return data.filter(it => it.relasjonsIdBruker === id)
    }
    getAll = () => {
        return data.sort((a: INote, b: INote) => b.dateAdded.getTime() - a.dateAdded.getTime())
    }
    post = (note: INoteDTO) => {
        const highestId = Math.max(...data.map(note => note.id));
        const newNote: INote = {
            id: (highestId + 1),
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