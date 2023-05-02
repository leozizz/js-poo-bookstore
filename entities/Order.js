//Classe que define as caracteristicas e comportamento de um pedido
module.exports = class Order {
    //Propriedades Privadas de um pedido
    #total
    #items
    #user

    constructor(items, user) {
        items.forEach(({product, quantity}) => {
            //Verificação da quantidade de produtos em estoque
            if (quantity > product.inStock) {
                throw new Error('Quantidade insuficiente em estoque!')
            }
        });
        this.#items = items
        this.#user = user
        //Calcula o valor total pela quantidade dos produtos
        this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0)
    }

    //Método get que nos retorna um objeto com as informações privadas do pedido para consulta
    get data () {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}