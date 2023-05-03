module.exports = class Database {
    // Atributo privado que armazena em um objeto um array para cada entidade salva.
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    //Método para acessar e retornar o atributo privado #storage, key representa a chave a ser acessada
    find(key) {
        return this.#storage[key]
    }

    //Salve o author informado em #storage ( base de dados )
    saveAuthor(author) {
        this.#storage.authors.push(author)
    }


    //Verifica se o Livro já existe em #storage
    findBookByName(bookName) {
        this.#storage.books.find(b => b.name === bookName)
    }

    //Se o livro não existir em #storage, efetua um push para a base de dados
    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if (!bookExists) {
            this.#storage.books.push(book)
        }
    }

    //Se o livro existir em #storage, irá adicionar a quantidade informada em estoque
    addBooksToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    //Se o livro existir em #storage, irá remover  a quantidade informada em estoque
    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeBooksFromStock(quantity)
    }

    findPosterByName(posterName) {
        this.#storage.posters.find(p => p.name === posterName)
    }

    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeBostersFromStock(quantity)
    }

    //Realiza um push para o array users caso o user informado não exista na base de dados
    //a verificação é realizada através do email.
    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists) {
            this.#storage.users.push(user)
        }
    }

    //Envia o Pedido (order) para a base de dados, as verificações são realizadas em Order.js
    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    //Exibe os dados de #storage formatado em tabela no console
    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        //O método map retorna o getter data para visualizar os atributos privados de Order.js
        console.table(this.#storage.orders.map( order => order.data ))
    }
}