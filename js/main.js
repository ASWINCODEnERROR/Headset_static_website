let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);
})



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

document.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
}


