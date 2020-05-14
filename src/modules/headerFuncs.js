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
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768){
        const bigMenu = document.querySelector('.hidden-small');
        const smallMenu = document.querySelector('.menu-button');


        smallMenu.style.display = 'block';
        bigMenu.style.display = 'none';
      } else  {
        const bigMenu = document.querySelector('.hidden-small');
        const smallMenu = document.querySelector('.menu-button');

        
        smallMenu.style.display = 'none';
        bigMenu.style.display = 'flex';
      }
    })
      
  }
  burgerMenu();
}

export default headerFuncs;