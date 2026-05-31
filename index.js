const navMenu = document.querySelector('#navMenu')
const openButton = document.querySelector('#openButton')
const closeButton = document.querySelector('#closeButton')

function toggleMenu() {
    navMenu.classList.toggle('nav-menu--open')
}
openButton.style.cursor = "pointer";
openButton.addEventListener('click', () => {

    toggleMenu()
})
    closeButton.style.cursor = "pointer";
closeButton.addEventListener('click', () => {

    toggleMenu()
})
const menuTitles = document.querySelectorAll('.menu-title');

menuTitles.forEach(title => {
    title.addEventListener('click', () => {
        const submenu = title.nextElementSibling;

        submenu.classList.toggle('active');
    });
});


// Добавить подпункты меню таким образом чтобы при клике 
// на любой пункт меню снизу появились еще два-три подраздела.




//Описать стили для бокового меню реализовать закрытие окна 
//залить на гитхаб и отправить ссылку в чате