const landingPage = document.getElementById('landing-page');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const homeNav = document.getElementById('home-nav');
const eduNav = document.getElementById('edu-nav');
const workNav = document.getElementById('work-nav');
const aboutMe = document.getElementById('about-me');
const contactNav = document.getElementById('contact-nav');
const homeContent = document.querySelector('.home-content');
const container = document.querySelector('.container');
const school = document.getElementById('school');
const contact = document.getElementById('contact');
const contactBox = document.querySelector('.contact-box');
const msgBubble = document.querySelector('.contact-title-icon');
const cards = document.querySelector('.cards');
const card = document.querySelectorAll('.card');
const cardBckg = document.querySelectorAll('.card-bckg');
const cardContent = document.querySelectorAll('.card-content');
const exp = document.querySelector('#exp');
const expCards = document.querySelector('.exp-cards');
const expCard = document.querySelectorAll('.exp-card');
const about = document.getElementById('about');
const footer = document.getElementById('footer');
const languageContainer = document.querySelector('.language-container');



menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    landingPage.classList.toggle('landing-hidden');
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));
    contact.classList.toggle('menu-shown');
    contactBox.classList.toggle('menu-shown');
    //overlay.classList.toggle('content-shown');
    homeContent.classList.toggle('menu-shown');
    for(i = 0; i < navItems.length; i++){
        navItems[i].classList.remove('is-active');
    }
    aboutMe.parentElement.classList.add('is-active');
    aboutMe.parentElement.classList.contains('is-active') && menuNav.classList.contains('show') ? about.className = 'show' : about.className = 'hide';
    menu.classList.contains('show') ? footer.style.display = 'none' : footer.style.display = 'block';
    //menu.classList.contains('show') ? languageContainer.style.display = "none" : languageContainer.style.display = "block";
    if(eduNav.parentElement.classList.contains('is-active')){
        school.classList.add('edu-shown');
        card.forEach(item => item.classList.add('edu-shown'));
    }else{
        school.classList.remove('edu-shown');
        card.forEach(item => item.classList.remove('edu-shown'));
    }
    if(workNav.parentElement.classList.contains('is-active')){
        exp.classList.add('xp-shown');
        expCards.classList.add('xp-shown');
        expCard.forEach(item => item.classList.add('xp-shown'));
    }else{
        exp.classList.remove('xp-shown');
        expCards.classList.remove('xp-shown');
        expCard.forEach(item => item.classList.remove('xp-shown'));
    }
    if(contactNav.parentElement.classList.contains('is-active')){
        contact.classList.add('contact-shown');
    }else{
        contact.classList.remove('contact-shown');
    }
}

navItems.forEach(item => item.addEventListener('click', navActive));
function navActive(e){
    for(i = 0; i < navItems.length; i++){
        navItems[i].classList.remove('is-active');
    }
    e.currentTarget.classList.add('is-active');

    aboutMe.parentElement.classList.contains('is-active') && menuNav.classList.contains('show') ? about.className = 'show' : about.className = 'hide';

    if(eduNav.parentElement.classList.contains('is-active')){
        school.classList.add('edu-shown');
        card.forEach(item => item.classList.add('edu-shown'));
    }else{
        school.classList.remove('edu-shown');
        card.forEach(item => item.classList.remove('edu-shown'));
    }
    if(workNav.parentElement.classList.contains('is-active')){
        exp.classList.add('xp-shown');
        expCard.forEach(item => item.classList.add('xp-shown'));
    }else{
        exp.classList.remove('xp-shown');
        expCard.forEach(item => item.classList.remove('xp-shown'));
    }
    if(contactNav.parentElement.classList.contains('is-active')){
        contact.classList.add('contact-shown');
    }else{
        contact.classList.remove('contact-shown');
    }
}
