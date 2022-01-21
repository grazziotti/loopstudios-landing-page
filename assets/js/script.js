const burgerBtn = document.querySelector('.js-burger-btn')
const menuMobile = document.querySelector('.js-menu-mobile')

const isOpen = () => menuMobile.classList.contains('is-open')

const open = () => {
    menuMobile.classList.add('is-open')
    document.body.classList.add('overflow-hidden')
    burgerBtn.classList.add('is-open')
    setTimeout(() => {
        menuMobile.classList.add('animate')
        }, 20)
}

const close = () => {
    menuMobile.classList.remove('animate')
    document.body.classList.remove('overflow-hidden')
    burgerBtn.classList.remove('is-open')
    setTimeout(() => {
        menuMobile.classList.remove('is-open')
        }, 300)
}

const handle = event => {
    if (event.type === 'touchstart') event.preventDefault()
    isOpen()
        ?  close()
        :  open()
}

burgerBtn.addEventListener('click', handle)
burgerBtn.addEventListener('touchstart', handle)