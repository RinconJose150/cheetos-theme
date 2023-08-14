document.addEventListener('DOMContentLoaded', function() {
    listenerEvents()
})

function listenerEvents() {
    // Function Menu
    functionMenu()

    // Swiper
    runSwiper()
}

function functionMenu() {
    const btnMenu = document.querySelector('#containerLogin')
    btnMenu.addEventListener('click', e => {
        e.preventDefault()
        btnMenu.closest('.chessMenu__body').classList.add('hide')
        btnMenu.closest('.chessMenu__body').nextElementSibling.classList.remove('hidden')
        document.querySelector('.chess_header #menuFixed').classList.add('active')
        document.querySelector('body').classList.add('overflow-hidden')
        btnCloseMenu(btnMenu)
    })
}

function btnCloseMenu(btn) {
    const btnClose = document.querySelector('#btnCloseMenu')
    btnClose.addEventListener('click', e => {
        e.preventDefault()
        btnClose.classList.add('hidden')
        document.querySelector('body').classList.remove('overflow-hidden')
        document.querySelector('.chess_header #menuFixed').classList.remove('active')
        btnClose.previousElementSibling.classList.remove('hide')
    })
}

function runSwiper(params) {
    const chessSwiper = new Swiper(".chessSwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}