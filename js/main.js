

const burger_menu = document.querySelector('.burger-container');
const overlay = document.querySelector('.overlay');
const burger_close = document.querySelector('.burger-menu-close');
const burger_menu_list = document.querySelectorAll('.nav-link');

let is_scrolling = null;

const close = function () {
    overlay.style.display = 'none';
    burger_menu.style.display = 'block';
    burger_close.style.display = 'none';
};

const open = function () {
    overlay.style.display = 'block';
    burger_menu.style.display = 'none';
    burger_close.style.display = 'block';
    console.log(burger_close.style.display);



    for (const menu_item of burger_menu_list) {
        menu_item.addEventListener('click', close);
    }
};

const opacity = function () {
    window.clearTimeout(is_scrolling);
    burger_menu.classList.add('burger-container--opacity');

    if (burger_close.style.display === 'block') {
        window.clearTimeout(is_scrolling);
    } else {
        is_scrolling = setTimeout(function () {
            burger_menu.classList.remove('burger-container--opacity');
        }, 500)
    };
    console.log('augefuehrt')
}


window.addEventListener("scroll", opacity);

burger_menu.addEventListener('click', open);
overlay.addEventListener('click', close);
burger_close.addEventListener('click', close);