
//NAVBAR
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


// Menu show

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {

    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })

}


// On click remove menu mobile

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// Header shadow
function scrollHeader() {
    const nav = document.getElementById('header');

    // quando o scroll estiver a 200 de altura da viewport, add scroll-header class
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader);

// ACCORDION SKILLS

function toogle(accordionId, headerClass, listClass) {
    const accordionItem = document.getElementById(accordionId);
    console.log(accordionItem)
    const accordionList = accordionItem.getElementsByClassName(listClass).item(0);
    console.log(accordionList)
    const accordionHeader = accordionItem.getElementsByClassName(headerClass).item(0);
    console.log(accordionHeader)


    accordionHeader.addEventListener('click', () => {
        console.log(accordionList.classList)
        if (accordionList.classList.contains('skills_open')) {
            accordionList.classList.remove('skills_open');
            accordionList.classList.add('skills_close');
            accordionHeader.classList.remove('skills_open_header');
        } else {
            accordionList.classList.remove('skills_close');
            accordionList.classList.add('skills_open');
            accordionHeader.classList.add('skills_open_header');
        }
    })
}



toogle('skills1', 'skills_header', 'skills_list');

toogle('skills2', 'skills_header', 'skills_list');




// QUALIFICATION

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active')
    })
})


// SERVICES

const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close');


let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalCloses, i) => {
    modalCloses.addEventListener('click', () => {
      
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})


// Swipper JS
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
});


// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Anteriormente selecionado (se o usuario selecionar)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// nos obtemos o tema atual que a interface irá validar a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// nos validaremos se o usario anteriormente escolher o topico
if (selectedTheme) {
    // se a validação for cumprida, iremos perguntar qual issue devera ser ativada se é a activated ou desativated o the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add ou remover the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // nos salvamos o tema e o icone atual para o usuario escolher
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})