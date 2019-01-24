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
const toTop = document.getElementById('to-top');

function toTopScrolling(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    landingPage.classList.toggle('landing-hidden');
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));

    navItems.forEach(item => item.classList.remove('is-active'));

    aboutMe.parentElement.classList.add('is-active');
    aboutMe.parentElement.classList.contains('is-active') && menuNav.classList.contains('show') ? about.className = 'show' : about.className = 'hide';

    menu.classList.contains('show') ? footer.style.display = 'none' : footer.style.display = 'block';

    eduNav.parentElement.classList.contains('is-active') ? school.classList.add('edu-shown') : school.classList.remove('edu-shown');

    workNav.parentElement.classList.contains('is-active') ? exp.classList.add('xp-shown') : exp.classList.remove('xp-shown');

    contactNav.parentElement.classList.contains('is-active') ? contact.classList.add('contact-shown') : contact.classList.remove('contact-shown');
}

navItems.forEach(item => item.addEventListener('click', navActive));

function navActive(e){
    toTopScrolling();

    navItems.forEach(item => item.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');

    aboutMe.parentElement.classList.contains('is-active') && menuNav.classList.contains('show') ? about.className = 'show' : about.className = 'hide';

    eduNav.parentElement.classList.contains('is-active') ? school.classList.add('edu-shown') : school.classList.remove('edu-shown');

    workNav.parentElement.classList.contains('is-active') ? exp.classList.add('xp-shown') : exp.classList.remove('xp-shown');

    contactNav.parentElement.classList.contains('is-active') ? contact.classList.add('contact-shown') : contact.classList.remove('contact-shown');
}

window.onscroll = function() {arrowFade()};

function arrowFade() {
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? toTop.style.opacity = "1" : toTop.style.opacity = "0";
}

toTop.onclick = function(){toTopScrolling()};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;
  prevScrollpos > currentScrollPos ? menu.style.transform = "rotateX(0deg)" : menu.style.transform = "rotateX(-90deg)";
  prevScrollpos = currentScrollPos;

  document.documentElement.scrollTop > 0 ? menuNav.style.paddingTop = "5px" : menuNav.style.paddingTop = "20px";
}

