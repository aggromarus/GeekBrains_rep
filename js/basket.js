const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class Basket {
    constructor(contrainer = '.cart') {
        this.contrainer = contrainer;
        this.basketGoods = [];
        this.allBasketProducts = [];
        this._getBasket();
    }
    _getBasket() {
        fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => {
                this.basketGoods = [...data.contents];
                this.render()
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const block = document.querySelector(this.contrainer);
        for (let product of this.basketGoods) {
            const basketObj = new BasketItem(product);
            this.allBasketProducts.push(basketObj);
            block.insertAdjacentHTML('beforeend', basketObj.render());
        }
    }

}

class BasketItem {
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
        // this.id = id_product;
    }
    render() {
        return `<div class="cart">
        <h4>${this.title}</h4>
        <p class=>${this.price}$</p>
        <button class=""buy-btn>Buy</button>
        <p>Количество - ${this.quantity}</p>
                </div>`
    }
}

let basketList = new Basket();
