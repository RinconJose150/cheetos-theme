document.addEventListener('DOMContentLoaded', function() {
    listenerEvents()
})

function listenerEvents() {
    // Function Menu
    functionMenu()

    // Swiper
    runSwiper()

    // Change URL
    changeURL()
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
        direction: "vertical",
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

function changeURL() {
    const btn = document.querySelector('.chess_instructions .btnChee')
    btn.addEventListener('click', e => {
        e.preventDefault()
        const url = new URL(location);
        // url.searchParams.set("foo", "bar");
        url.pathname = '/hola'
        history.pushState({}, "", url);
        probando()
    })
}

function probando() {
    // detected if de page is reloading
    window.addEventListener('beforeunload', function (e) {
        const url = new URL(location);
        console.log(url.pathname);
        // redirect another page
        window.location.href = '/instruction';
    });
}