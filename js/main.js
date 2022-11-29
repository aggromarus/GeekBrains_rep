//исходный массив товаров
const products = [
    { id: 1, title: 'ELLERY X MO CAPSULE', price: 100, description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
    { id: 2, title: 'Shirt', price: 50, description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
    { id: 3, title: 'Hat', price: 10, description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi. " },
];

// рендер карточки товара в списке 
const renderProduct = (title, price, description) => {
    return `<div class="card">
        <a href="product.html"><img src="image/beard_man.png" alt="beard_man" /></a>
        <h4>${title}</h4>
        <p>${description}</p>
        <p class="card__price">${price}$</p>
        <button class=""buy-btn>Buy</button>
            </div>`
};

// рендер списка товаров, проходит по каждому элементу renderProduct map`ом и записывает в константу списка товаров на странице 
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.description));
    document.querySelector('.product').innerHTML = productsList.join(' ');
}

renderPage(products);