const navAnimate = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        navLinks.classList.toggle('nav-links-active');
        nav.classList.toggle('nav-active');
        dropDown();
    });
};

const navScroll = () => {
    const nav = document.querySelector('nav');
    const menu = document.querySelector('.drop-down');
    var menuClassList = [...menu.classList];
    
    document.addEventListener('scroll', () => {
        if(!menuClassList.includes("drop-down-active")){
            if(window.scrollY >= nav.offsetHeight){
                nav.classList.add('nav-scroll');
            } else {
                nav.classList.remove('nav-scroll');
            }
        }
        
    });
};

const dropDown = () => {
    const menu = document.querySelector('.drop-down');
    const nav = document.querySelector('nav');
    var navClassList = [...nav.classList];
    var menuClassList = [...menu.classList];

    if(navClassList.includes("nav-scroll")){
        nav.classList.toggle('nav-scroll');
    }
    if(menuClassList.includes("drop-down-active")){
        nav.classList.toggle('nav-scroll');
    }
    menu.classList.toggle('drop-down-active');
}

const start = () => {
    navAnimate();
    navScroll();
};

start();