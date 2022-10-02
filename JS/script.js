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
    const skillArrows = document.getElementsByClassName('skills_arrow');
    
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



toogle('skills1', 'skills_header', 'skills_list', 'skillArrows');



// ACCORDION -> BACKEND SKILLS
function toogle(accordionId, headerClass, listClass) {
    const accordionItem = document.getElementById(accordionId);
    console.log(accordionItem)
    const accordionList = accordionItem.getElementsByClassName(listClass).item(0);
    console.log(accordionList)
    const accordionHeader = accordionItem.getElementsByClassName(headerClass).item(0);
    console.log(accordionHeader)
    const skillArrows = document.getElementsByClassName('skills_arrow');

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



toogle('skills2', 'skills_header', 'skills_list', 'skillArrows');


