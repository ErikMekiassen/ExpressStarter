import data from './brukerDB';
import { IBruker, IBrukerDTO, INyBrukerDTO } from './bruker';
class BrukerRepo {

    getAll = () => {
        return data
    }
    post = (bruker: INyBrukerDTO) => {
        const highestId = Math.max(...data.map(note => note.id));
        const nyBruker: IBruker = {
            id: (highestId + 1),
            brukernavn: bruker.brukernavn,
            fornavn: bruker.fornavn,
            etternavn: bruker.etternavn,
            epost: bruker.epost,
            telefonnummer: bruker.telefonnummer,
            dateAdded: new Date(new Date().getTime())
        }
        return data.push(nyBruker)
    }
    put = (id: string, bruker: IBruker) => {
        const index = data.findIndex(bruker => bruker.id.toString() === id)
        data[index] = bruker
        return data
    }
}
export default BrukerRepo