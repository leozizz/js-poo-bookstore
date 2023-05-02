//Classe que recebe informações de um autor
module.exports = class Author {
    constructor(name, nationality, bio) {
        this.name = name
        this.nationality = nationality
        this.bio = bio
    }
}