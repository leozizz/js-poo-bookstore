//Classe que define as características de Produto.
module.exports = class Product {
    constructor(name, description, price, inStock = 0) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    //Método que adiciona uma quantidade x de produtos ao estoque
    addToStock(quantity) {
        this.inStock += quantity
    }

    //Método que remove uma quantidade x de produtos do estoque
    removeFromStock(quantity) {
        this.inStock -= quantity
    }
}