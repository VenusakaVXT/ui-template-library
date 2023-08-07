// const mockData = [
//     {
//         imgProduct: '',
//         nameProduct: 'Shirt 1',
//         priceProduct: 99
//     },
//     {
//         imgProduct: '',
//         nameProduct: 'Shirt 2',
//         priceProduct: 99
//     },
//     {
//         imgProduct: '',
//         nameProduct: 'Shirt 3',
//         priceProduct: 99
//     },
// ];

fetch('https://fakestoreapi.com/products')
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data)
    const productList = document.querySelector('.list-product');

    productList.innerHTML = ``
    
    data.forEach(item => {
        const newProduct = document.createElement('div');
        newProduct.classList.add('product-item');
        newProduct.innerHTML = `
        <img src="${item.image}" alt="">
        <div class="product-info">
            <span class="product-name">${item.title}</span>
            <span class="product-price">${item.price}$</span>
        </div>
        `;
    
        productList.appendChild(newProduct);
    });
})

const searchInput = document.querySelector('.search input');

searchInput.addEventListener('input', (e) => {
    const txtSearch = e.target.value.trim().toLowerCase();
    const listProductDOM = document.querySelectorAll('.product-item');

    listProductDOM.forEach(item => {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
})
