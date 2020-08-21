"use strict";
// import {goods} from './data.js';

const regionLink = document.querySelector('.region__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const popup = document.querySelector('popup');
const popupRegion = document.querySelector('.popup__region');
const popupClose = document.querySelectorAll('.popup__close');
const popupOverlay = document.querySelectorAll('.popup-overlay');

// *Объявляем общую функцию для модальных окон, чтобы по нажатию на крестик или на пустое пространство с классом popup или на esc, окна закрывались

const closePopup = (event) => {
  const target = event.target; //навешиваем делегирование

  if (
    target.closest(".popup__close") ||
    target.closest(".popup-overlay") ||
    event.code === "Escape"
  ) {
    popupRegion.classList.add("hide");
    
    document.removeEventListener("keydown", closePopup); //удаляем событие (прослушку), чтобы каждый раз при закрытии окна оно не оставалось, при новом открытии уже не навешивалось два и тд.
  }
};
popupRegion.addEventListener("click", closePopup);

// * При нажатии на ссылку Москва удалится класс hide и откроется модальное окно
regionLink.addEventListener("click", () => {
  popupRegion.classList.remove("hide");
  document.addEventListener("keydown", closePopup); //навешиваем событие, чтобы можно было закрывать окно
});

// Открытие закрытие списка Каталог
const catalogDropdownLink = document.querySelector('.catalog-dropdown-link')
const catalogDropdownStraw = document.querySelector('.catalog-dropdown-straw')
const leftDropdownCatalog = document.querySelector('.left-dropdown-catalog')
const catalogModal = document.querySelector('.catalog-modal')

catalogDropdownLink.onclick = function(){
  catalogModal.style.display = 'block'
  catalogDropdownStraw.classList.add('rotate')
}

catalogDropdownStraw.onclick = function(){
  
 if(catalogDropdownStraw.classList === 'rotate'){
  catalogModal.style.display = 'none'
 } else {
  catalogModal.style.display = 'block'
  catalogDropdownStraw.classList.add('rotate')
 }
 }
window.onclick = function(event){
  if(event.target === catalogModal){
    catalogModal.style.display = 'none'
    catalogDropdownStraw.classList.remove('rotate')
  }
}

const goods=[
  {name: 'Пазогребневая плита Knauf влагостойкая полнотелая 667х500х80 мм', price: '282', bonuseprice: '85.25', popularrate: '3.5', img: 'src="images/Пазогребневая плита Knauf.jpg"', code: '617318'},
  {name: 'Пазогребневая плита ВОЛМА 667х500х80 мм полнотелая', price: '198', bonuseprice: '34.75', popularrate: '3', img:'src="images/скоба для пазогребневой плиты.jpg"', code: '157352'},
  {name: 'Скоба для пазогребневой плиты Кнауф С1 120х100 мм', price: '22', bonuseprice: '5.75', popularrate: '3', img:'src="images/скоба для пазогребневой плиты.jpg"', code: 'Код: 157352'},
  {name: 'Пазогребневая плита 667х500х80 мм Кнауф (полнотелая)', price: '224', bonuseprice: '45.75', popularrate: '3', img:'src="images/Пазогребневая плита Кнауф.jpg"', code: '132234'},
  {name: "Лента полимерная Knauf  6х80 мм 20 м для пазогребневой плиты", price: '1245', bonuseprice:'311', popularrate: '0.5', img:'src="images/лента кнауф мал.jpg"', code: '661962'}
  ]
//* Эта функция будет брать базу данных, перебирать ее и формировать верстку, это делается когда запускается сайт один раз
const productsList = document.querySelector(".products-list")



const renderCard = (goods) => {
  productsList.textContent = "";
  //используем метод перебора, который принимает callback функцию, которая принимает объект и его индекс
  //Метод insertAdjacentHTML не перзаписывает верстку, а именно добавляет
  goods.forEach((item) => {
    productsList.insertAdjacentHTML(
      "beforeend",
      `  
      <div class="product-container-raw" data-price="${item.price}" data-rating="${item.popularrate}">
                        <div class="product-item-photo-col">
                            <img src="${item.img}" alt="${item.name}">
                        </div>
                        <div class="product-item-info-col">
                            <div class="rating-stars">
                                <span class="product-item-code">Код: ${item.code}</span>
                            </div>
                            <div class="product-title-block">
                                <a href="#" class="product-title-link">${item.name}
                                </a>
                                <div class="product-maybeneed-block">
                                    <span>Могут понадобиться:</span>
                                    <a href="#">Кладочные и монтажные смеси,</a>
                                    <a href="#">Шпаклевки,</a>
                                    <a href="#">Ножи строительные, лезвия,</a>
                                    <a href="#">Защита рук,</a>
                                    <a href="#">Мешки, пакеты, коробки, стретч</a>
                                </div>
                            </div>   
                        </div>
                        <div class="product-cart-info-col">
                            <p class="product-amount-and-subdivision">Горьковское шоссе: 30 шт</p>
                            <div class="cart-price-block-black">
                                <div class="cart-price-block-text">По карте клуба</div>
                                <div class="price-in-price-block">
                                    <span>${item.price}</span>
                                    <svg class="view-variant-link-icon">
                                        <use xlink:href="sprite.svg#rub"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="cart-price-block-gray">
                                <span>${item.price}</span>
                                <svg class="gray-rub">
                                    <use xlink:href="sprite.svg#lightrub"></use>
                                </svg>
                            </div>
                            <p class="cart-info-bonus-price">Можно купить за ${item.bonusprice} баллов</p>
                            <p class="cart-info-pcs-price">Цена за штуку</p>
                            <div class="cart-and-compare-wrapper">
                                <input type="text" value="1">
                                <div class="straw-amount-wrapper">
                                    <div class="amount-straw-up">
                                        <svg class="main__left-col-straw">
                                            <use xlink:href="sprite.svg#ctrl"></use>
                                        </svg>
                                    </div>
                                    <div class="amount-straw-down">
                                        <svg class="main__left-col-straw">
                                            <use xlink:href="sprite.svg#ctrl"></use>
                                        </svg>
                                    </div>
                                </div>
                                <button type="submit" class="in-cart-btn">
                                    <svg class="icon-in-cart">
                                        <use xlink:href="sprite.svg#cart"></use>
                                    </svg>
                                    <span>в корзину</span>
                                </button>
                            </div>
                            <div class="add-compare-list">
                                <span>Добавить к сравнению</span>
                                <svg class="icon-add-tocart">
                                    <use xlink:href="sprite.svg#plus"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
    `
    );
  });
};





// products-list родитель карточек товаров
// product-container-raw ребенок карточка товара


// Сортировка по возрастанию цены
// goods.sort(function(a, b){
//   return a.price-b.price
// })
// console.log(goods)

// Сортировка по убыванию цены
// goods.sort(function(a, b){
//   return b.price-a.price
// })
// console.log(goods)

// Функция сортировки от А до Я
// goods.sort(function(a, b){
//   const nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
//   if (nameA < nameB) //сортируем строки по возрастанию
//     return -1
//   if (nameA > nameB)
//     return 1
//   return 0 // Никакой сортировки
//   })
//   console.log(goods)

// Функция сортировки от Я до А
  // goods.sort(function(a, b){
  //   const nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  //   if (nameA < nameB) //сортируем строки по возрастанию
  //     return -1
  //   if (nameA > nameB)
  //     return 1
  //   return 0 // Никакой сортировки
  //   })
  //   console.log(goods.reverse())

  // Сортировка по популярности
// goods.sort(function(a, b){
//   return b.popularrate-a.popularrate
// })
// console.log(goods)


// короткий способ сортировки по возрастанию
// let a = [3, 2, 1, 1, 5, 4],
// c = [];
// for (; a.length;)  { c.push(a.splice(a.indexOf(Math.min(...a)),1)[0])}
// console.log(c)
// Math.min(...a) //возвращает наименьшее из чисел массива a.
// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.


// const productsList = document.querySelector('.products-list')
// replacedNode = productsList.replaceChild(productsList.children[1], productsList.children[0])
// productsList.appendChild(replacedNode)
// const productsList = document.querySelector('.products-list')

// document.querySelector('.sorting-style-price-span').onclick = goodsSort()
// document.querySelector('.sorting-style-alphabet-span').onclick = goodsSortDesc()
// function goodsSort(){
//   for (let i = 0;  i < productsList.children.length; i++) {
//     for ( j=i;  j < productsList.children.length; j++) {
//       if (+productsList.children[i].getAttribute('data-price') > +productsList.children[j].getAttribute('data-price')){
//         replacedNode = productsList.replaceChild(productsList.children[j], productsList.children[i]) //перезаписываем первый элемент
//         insertAfter(replacedNode, productsList.children[i]) //после него вставляем перезаписанный элемент
//       }
//     }
// }
// }
// function goodsSortDesc(){
//   for (let i = 0;  i < productsList.children.length; i++) {
//     for ( j=i;  j < productsList.children.length; j++) {
//       if (+productsList.children[i].getAttribute('data-price') < +productsList.children[j].getAttribute('data-price')){
//         replacedNode = productsList.replaceChild(productsList.children[j], productsList.children[i]) //перезаписываем первый элемент
//         insertAfter(replacedNode, productsList.children[i]) //после него вставляем перезаписанный элемент
//       }
//     }
// }
// }
// function insertAfter(elem, refElem){
//   return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
// }