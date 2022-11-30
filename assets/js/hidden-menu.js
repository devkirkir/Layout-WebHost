'use strict'

window.addEventListener('resize', function() {
    if (document.documentElement.clientWidth > 768) {
        document.querySelector('.burger').classList.remove('burger-active')
        document.getElementById('hidden-top-navigation').classList.remove('show-menu')
    }
})

function bindMenu() {
    let menuElems = document.querySelectorAll('.hidden-elem-nav')
    let buttonMenu = document.getElementById('hidden-menu-button')

    buttonMenu.addEventListener('click', function () {
        toggleMenu()
    })

    for (let i = 0; i <= menuElems.length; i++) {
        menuElems[i].addEventListener('click', toggleMenu)
    }
}

function toggleMenu() {
    let menuBlock = document.getElementById('hidden-top-navigation')

    document.querySelector('.burger').classList.toggle('burger-active')
    menuBlock.classList.toggle('show-menu')
}

bindMenu()