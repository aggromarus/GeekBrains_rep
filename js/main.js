class ProductList {
    constructor(container = '.product') {
        this.container = container;
        this.goods = []; //сюда добавляется весь список товаров из fetchProducts
        this.allProducts = []; //массив в который рендерятся новые объекты класса ProductItem после ProductList.render()
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'ELLERY X MO CAPSULE', price: 100, description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
            { id: 2, title: 'Shirt', price: 50, description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
            { id: 3, title: 'Hat', price: 10, description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
        ];
    }
    render() {
        const block = document.querySelector(this.container); //this.container соответствует container из конструктора класса ProductList
        for (let product of this.goods) {
            const productObj = new ProductItem(product); // экземпляр объекта ProductItem 
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}


class ProductItem {  //класс карточки товара
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.description = product.description;
        // this.id = product.id;
        // this.img = product.img;
    }
    render() { 
        return `<div class="card">
        <a href="product.html"><img src="image/beard_man.png" alt="beard_man" /></a>
        <h4>${this.title}</h4>
        <p>${this.description}</p>
        <p class="card__price">${this.price}$</p>
        <button class=""buy-btn>Buy</button>
                </div>`
    }
}

let list = new ProductList();
list.render();

// //исходный массив товаров
// const products = [
//     { id: 1, title: 'ELLERY X MO CAPSULE', price: 100, description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
//     { id: 2, title: 'Shirt', price: 50, description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
//     { id: 3, title: 'Hat', price: 10, description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
// ];

// // рендер карточки товара в списке 
// const renderProduct = (title, price, description) => {
    
// };

// // рендер списка товаров, проходит по каждому элементу renderProduct map`ом и записывает в константу списка товаров на странице 
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item.title, item.price, item.description));
//     document.querySelector('.product').innerHTML = productsList.join(' ');
// }

// renderPage(products);