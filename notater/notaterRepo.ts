const data = require("./notaterDB")

const notaterRepo = {

    getAll: () => {
        return data
    },
    getById: (id) => {
        return data.find(note => note.id === id)
    },
    post: (note) => {
        data.push(note)
    }
}