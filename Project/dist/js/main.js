const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuPortrait = document.querySelector('.menu-portrait');

const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        navItems.forEach(item => item.classList.remove('hide'));

        navItems.forEach(item => item.classList.add('show'));

        sleep(200).then(() => {
            menuBtn.classList.remove('open');
            menu.classList.remove('hide');
            menuNav.classList.remove('hide');
            menuPortrait.classList.remove('hide');

            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuPortrait.classList.add('show');

            showMenu = true;
        });
    } else {
        navItems.forEach(item => item.classList.remove('show'));

        navItems.forEach(item => item.classList.add('hide'));

        sleep(200).then(() => {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuPortrait.classList.remove('show');

            menuBtn.classList.add('open');
            menu.classList.add('hide');
            menuNav.classList.add('hide');
            menuPortrait.classList.add('hide');

            showMenu = false;
        });
    }
}