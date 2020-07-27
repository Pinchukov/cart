let row = document.querySelector('.row');
let res = document.querySelector('.result');

let dataTitle;
let dataPrice;

row.addEventListener('click', addFunc);
res.addEventListener('click', deleteFunc);

function addFunc(e) {
    if(e.target.classList.contains('add')){
        dataTitle = e.target.dataset.title;
        dataPrice = e.target.dataset.price;
        renderFunc();
    }
};

function deleteFunc(e) {
    if(e.target.classList.contains('resBtnRemove')){
        e.target.parentElement.remove();
    }
};

function renderFunc() {
    res.innerHTML += `<li>Имя: ${dataTitle} | Цена: ${dataPrice} |
    Колличество: <input class="cart-quantity-input" type="number" value="1"> | 
    <button class="resBtnRemove">&#10060;</button></li>`;
};