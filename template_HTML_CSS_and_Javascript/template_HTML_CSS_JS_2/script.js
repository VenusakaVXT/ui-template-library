const productImage = document.querySelector('.product-card__img img');
const nameProduct = document.querySelector('.product-card__title');
const selectBlue = document.querySelector('.product-cart__color--blue');
const selectRed = document.querySelector('.product-cart__color--red');
const selectBlack = document.querySelector('.product-cart__color--black');
const blue = 'blue';
const red = 'red';
const black = 'black';

function selectColor(color) {
    productImage.src = `./jordan_${color}_shoes_3d.png`;
    nameProduct.textContent = `Jordan ${color.charAt(0).toUpperCase() + color.slice(1)} Shoes`;
    nameProduct.style.color = `${color}`;
}

selectRed.addEventListener('click', () => selectColor(red));
selectBlack.addEventListener('click', () => selectColor(black));
selectBlue.addEventListener('click', () => {
    selectColor(blue);
    nameProduct.style.color = 'var(--primary-color)';
});
