interface IBruker {
    id: number,
    brukernavn: string,
    fornavn: string,
    etternavn: string,
    epost: string,
    telefonnummer: string,
    dateAdded: Date
}
interface IBrukerDTO {
    id: string,
    brukernavn: string,
}
interface INyBrukerDTO {
    brukernavn: string,
    fornavn: string,
    etternavn: string,
    epost: string,
    telefonnummer: string,
}
export { IBruker, IBrukerDTO, INyBrukerDTO };