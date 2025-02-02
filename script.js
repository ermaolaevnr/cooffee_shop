let burger = document.querySelector('#burger')
let nav = document.querySelector('#nav')
burger.addEventListener('click', () =>  {
  nav.classList.toggle('navigation__active');
  burger.classList.toggle('header__burger_active');
  console.log(burger);
  //sdasd
})