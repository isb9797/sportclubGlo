//? Функции шапки сайта

const headerFuncs = () => {

  //? Кликер
  const headerClicker = () => {
    const header = document.querySelector('.header-main');
    header.addEventListener('click', event => {
      const target = event.target;

      //? Вызов меню в мобильной версии и его закрытие
      
      
      if (target.parentNode.matches('.menu-button')){
        const menu = document.querySelector('.popup-menu');   
        menu.style.display = 'block';
      }

      if (target.parentNode.matches('.close-menu-btn')){
        const menu = document.querySelector('.popup-menu');   
        menu.style.display = 'none';
      }



    })
  }
  headerClicker();

  //? Бургер меню
  const burgerMenu = () => {
    if (window.innerWidth < 768){
      const bigMenu = document.querySelector('.hidden-small');
      const smallMenu = document.querySelectorAll('.menu-button');

      smallMenu.forEach(elem => {
        elem.style.display = 'block'
      })


      bigMenu.style.display = 'none'
    }
  }
  burgerMenu();
}

export default headerFuncs;