const btnClose = document.querySelector('.close-icon');
const announcement = document.querySelector('.announcement');

const naviBtn = document.querySelector('#navi__menu-toggle');
const naviBtnBg = document.querySelector('#navi__btn-bg');
const naviMenu = document.querySelector('#navi__menu');

// const mediaQueryLg = window.matchMedia('(min-width: 1000px)');
const bpLg = 1000; // 1000px;

// close the announcement bar when click the button
btnClose.addEventListener('click', () => {
    announcement.parentNode.removeChild(announcement);
})

// toggle the navigation btn
naviBtn.addEventListener('click', () => {
    naviBtnBg.classList.toggle('navigation__btn-bg--scale');
    naviMenu.classList.toggle('navigation__menu--show');
});

function checkMediaQuery() {
    if (window.innerWidth > bpLg) {
        naviBtnBg.classList.remove('navigation__btn-bg--scale');
        naviMenu.classList.remove('navigation__menu--show');
    }
}

window.addEventListener('resize', checkMediaQuery);