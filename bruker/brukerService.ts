import BrukerRepo from "./brukerRepo";
import {IBruker, IBrukerDTO, INyBrukerDTO} from "./bruker";
const repo = new BrukerRepo();
class brukerService {
    getAllByDateAdded: () => IBruker[] = () => {
        return repo.getAll();
    }
    post = (bruker: INyBrukerDTO) => {
        return repo.post(bruker)
    }
    put = (id: string, bruker: IBruker) => {
        return repo.put(id, bruker)
    }
}

export default brukerService