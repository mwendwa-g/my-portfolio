const searchForm = document.querySelector('.search-form');
const searchIcon= document.getElementById('search-btn');

searchIcon.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    logIn.classList.remove('active');
    navbar.classList.remove('active');
});


const shoppingCart = document.querySelector('.shopping-cart');
const cartIcon= document.getElementById('cart-btn');

cartIcon.addEventListener('click', ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    logIn.classList.remove('active');
    navbar.classList.remove('active');
});


const logIn = document.querySelector('.login-form');
const logintIcon= document.getElementById('login-btn');

logintIcon.addEventListener('click', ()=>{
    logIn.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
});
    
const navbar = document.querySelector('.navbar');
const navbarIcon = document.getElementById('menu-btn');

navbarIcon.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    logIn.classList.remove('active');
});

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    logIn.classList.remove('active');
    navbar.classList.remove('active');
}

//slider
var swiper = new Swiper(".product-slider",{
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".review-slider",{
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});