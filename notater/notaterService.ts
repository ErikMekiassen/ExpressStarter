import notaterRepo from "./notaterRepo";
import {INote, INoteDTO} from "./notes";
const repo = new notaterRepo();
class notaterService {
    getAllByDateAdded: () => INote[] = () => {
        return repo.getAll();
    }
    post = (note: INoteDTO) => {
        return repo.post(note)
    }
    put = (id: string, note: INoteDTO) => {
        return repo.put(id, note)
    }
}

export default notaterService