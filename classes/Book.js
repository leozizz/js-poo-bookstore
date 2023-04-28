const Product = require("./Product");

//Subclasse de Product - Book que define as características de um livro
module.exports = class Book extends Product {
    constructor(title, synopsis, genre, pages, author, description, price, inStock) {
        super(`Title: ${title}`, description, price, inStock)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}