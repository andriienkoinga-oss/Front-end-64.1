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


//Описать стили для бокового меню реализовать закрытие окна 
//залить на гитхаб и отправить ссылку в чате