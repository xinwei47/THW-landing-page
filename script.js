const btnClose = document.querySelector(".close-btn");
const announcement = document.querySelector(".announcement");

// close the announcement bar when click the button
btnClose.addEventListener('click', () => {
    announcement.parentNode.removeChild(announcement);
})