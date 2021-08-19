// close the announcement bar when click the button
const btnClose = document.querySelector('.close-icon');
const announcement = document.querySelector('.announcement');

btnClose.addEventListener('click', () => {
    announcement.parentNode.removeChild(announcement);
})

// toggle the navigation btn
const naviBtn = document.querySelector('#navi__menu-toggle');
const naviBtnBg = document.querySelector('#navi__btn-bg');
const naviMenu = document.querySelector('#navi__menu');
const bpLg = 1000; // 1000px;

naviBtn.addEventListener('click', () => {
    naviBtnBg.classList.toggle('navigation__btn-bg--scale');
    naviMenu.classList.toggle('nav-show');
});

function checkMediaQuery() {
    if (window.innerWidth > bpLg) {
        naviBtnBg.classList.remove('navigation__btn-bg--scale');
        naviMenu.classList.remove('nav-show');
    }
}
window.addEventListener('resize', checkMediaQuery);

// open & close the announcement popup content
const popupOpen = document.querySelector('.announcement__link');
const popupBox = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupClose = document.querySelector('.popup__close');

popupOpen.addEventListener('click', (event) => {
    popupBox.classList.add('popup-show');
})

popupClose.addEventListener('click', () => {
    popupBox.classList.remove('popup-show');
})

document.addEventListener('click', (event) => {
    if (popupBox.contains(event.target) && !popupContent.contains(event.target)) {
        popupBox.classList.remove('popup-show');
    }
})