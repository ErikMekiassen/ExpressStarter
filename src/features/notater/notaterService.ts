import notaterRepo from "./notaterRepo";
import {INoteUpdateDTO, INoteDTO} from "./notater";
import { ObjectId } from "mongoose";
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
    put = (id: ObjectId, note: INoteUpdateDTO) => {
        return repo.put(id, note)
    }
}

export default notaterService