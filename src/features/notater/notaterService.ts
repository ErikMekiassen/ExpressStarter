import notaterRepo from "./notaterRepo";
import {INote, INoteDTO} from "./notater";
const repo = new notaterRepo();
class notaterService {
    getAllById = (id: number) => {
        console.log("repo.getAll", repo.getAllById(id));
        
        return repo.getAllById(id);
    }
    getAll = () => {
        return repo.getAll()
    }
    post = (note: INoteDTO) => {
        return repo.post(note)
    }
    put = (id: string, note: INoteDTO) => {
        return repo.put(id, note)
    }
}

export default notaterService