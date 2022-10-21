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


// ACCORDION SKILLS

// ACCORDION -> FRONTEND SKILLS

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

