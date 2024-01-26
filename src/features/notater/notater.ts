interface INote {
    id: number,
    relasjonsIdBruker: number,
    title: string,
    text: string,
    dateAdded: Date
}
interface INoteDTO {
    relasjonsIdBruker: number
    title: string,
    text: string,
    dateAdded?: Date,
}
export { INote, INoteDTO };