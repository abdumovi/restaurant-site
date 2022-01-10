const btn = document.querySelector('.change-theme');
const body = document.querySelector('body');
const nav = document.querySelector('.nav__menu');
const navshow = document.querySelector('.nav__toggle');
const links = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

navshow.addEventListener('click',function(){
  nav.classList.toggle('show-menu');
  
});
btn.addEventListener('click',function(){
  body.classList.toggle('dark-theme');
  if(btn.classList.contains('bx-moon')){
    btn.classList.remove('bx-moon');
    btn.classList.add('bx-sun');
  }
  else{
    btn.classList.remove('bx-sun');
    btn.classList.add('bx-moon');
  }
});

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active-link'));
  links[index].classList.add('active-link');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);