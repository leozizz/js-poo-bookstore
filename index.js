const App = require("./App")

//Cria um novo App
const app = new App()

//Cria novos autores
app.createAuthor('J. R. R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

//Obtem todos os autores salvos na Database
const authors = app.getAuthors()

//Cria novos livros para os autores informados pelo indice [i]
app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19,99, 100)
app.createBook('A Sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O Ladrão de Raios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A Pirâmide Vermelha', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

//Obtem todos os livros e salva no array books
const books = app.getBooks()

//Cria um novo usuario com nome, email e senha
app.createUser('Isaac', 'isaac@email.com', '123456')

//Obtem todos os usuarios salvos
const users = app.getUsers()

app.showDatabase()

//Cria um novo array de objetos onde produto recebe o tipo de produto e seu indice [i] e a quantidade de itens.
const items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
]

//Cria um pedido utilizando o array items e informa o usuario com o indice [i]
app.createOrder(items, users[0])

app.showDatabase()