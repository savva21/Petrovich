const regionLink = document.querySelector('.region__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const popup = document.querySelector('popup');
const popupRegion = document.querySelector('.popup__region');
const popupClose = document.querySelectorAll('.popup__close');
const popupOverlay = document.querySelectorAll('.popup-overlay');

let unlock = true;
const timeout = 800;



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
  //эта стрелочная функция является callback, тк она передается в функцию addEventListener
  popupRegion.classList.remove("hide");
  document.addEventListener("keydown", closePopup); //навешиваем событие, чтобы можно было закрывать окно
});




const catalogDropdownLink = document.querySelector('.catalog-dropdown-link')
const catalogDropdownStraw = document.querySelector('.catalog-dropdown-straw')
const leftDropdownCatalog = document.querySelector('.left-dropdown-catalog')
const catalogModal = document.querySelector('.catalog-modal')

catalogDropdownLink.onclick = function(){
  catalogModal.style.display = 'block'
  catalogDropdownStraw.classList.add('rotate')
}
// catalogDropdownStraw.onclick = function(){
//   leftDropdownCatalog.style.display = 'block'
//   catalogDropdownStraw.classList.add('rotate')
// }
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
