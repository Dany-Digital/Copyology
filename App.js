const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogom = document.querySelector('navbar__logo')

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highLightMenu = () => {
    const element = document.querySelector('.highlight');
    const Home = document.querySelector('#home-page');
    const about = document.querySelector('#about-page');
    const Testamonial = document.querySelector('#Testamonial-page');
    let scrollPos = window.scrollY;  

    if(window.innerWidth > 960 && scrollPos < 600){
        Home.classList.add('.highlight');
        about.classList.remove('.highlight');
        return
    }else if((window.innerWidth > 960 && scrollPos < 1400)){
        about.classList.add('.highlight');
        home.classList.remove('.highlight');
        Testamonial.classList.remove('.highlight');
        return
    }else if((window.innerWidth > 960 && scrollPos < 2345)){
        Testamonial.classList.add('.highlight');
        about.classList.remove('.highlight');
        return
    };

    if(element && window.innerWidth < 960 && scrollPos < 600 || element){
        element.classList.remove('highlight');
    };

}

window.addEventListener('scroll', highLightMenu);
window.addEventListener('scroll', highLightMenu);
