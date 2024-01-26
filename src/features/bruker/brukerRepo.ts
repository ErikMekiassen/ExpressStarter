import data from './brukerDB';
import { IBruker, IBrukerDTO, INyBrukerDTO } from './bruker';
const Bruker = require("./brukerModel");

class BrukerRepo {

    getAll = () => {
        return Bruker.getAll()
    }
    post = (bruker: INyBrukerDTO) => {
        const highestId = Math.max(...data.map(note => note.id));
        const nyBruker: INyBrukerDTO = {
            brukernavn: bruker.brukernavn,
            fornavn: bruker.fornavn,
            etternavn: bruker.etternavn,
            epost: bruker.epost,
            telefonnummer: bruker.telefonnummer,
            dateAdded: new Date(new Date().getTime())
        }
        return Bruker.create(nyBruker)
    }
    put = (id: string, bruker: IBruker) => {
        const index = data.findIndex(bruker => bruker.id.toString() === id)
        data[index] = bruker
        return data
    }
}
export default BrukerRepo