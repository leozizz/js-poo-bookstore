const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App {
    //Cria uma base de dados estática exclusiva de App
    static #database = new Database()

    //Cria um novo usuário e salva em #database
    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    //Obtém os usuários da base de dados utilizando o método find
    getUsers() {
        App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor
    }

    getAuthors() {
        App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    //Adiciona um livro ao estoque da database e sua quantidade
    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster(title, description, height, width, price, inStock) {
        const poster = new Poster(title, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    //Cria e salva um pedido na #database
    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        //Utiliza o getter data para acessar os items e para cada um deles realiza uma verificação
        //Se o item (produto) for uma instancia de Livro ou Poster, a quantidade informada será removida do estoque do item em questão
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, quantity)
            }
        })
    }

    //Devolve todos os pedidos em nossa base de dados
    getOrders() {
        return App.#database.find('orders')
    }

    //Chama o método showStorage() para exibir no console os dados salvos
    showDatabase() {
        App.#database.showStorage()
    }
}