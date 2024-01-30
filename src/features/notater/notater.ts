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
interface INoteUpdateDTO {
    title: string,
    text: string
}
export { INote, INoteDTO, INoteUpdateDTO };