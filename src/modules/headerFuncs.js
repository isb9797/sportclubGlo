//? Функции шапки сайта

const headerFuncs = () => {
  try {
    //? Кликер
    const headerClicker = () => {
      const header = document.querySelector(".header-main");
      header.addEventListener("click", (event) => {
        const target = event.target;

        //! Вызов меню в мобильной версии и его закрытие
        if (target.parentNode.matches(".menu-button")) {
          const menu = document.querySelector(".popup-menu");
          menu.style.display = "flex";
        }

        if (
          target.parentNode.matches(".close-menu-btn") ||
          target.closest(".scroll")
        ) {
          const menu = document.querySelector(".popup-menu");
          menu.style.display = "none";
        }

        //! Выпадающее меню с выбором филиала
        const listClub = document.querySelector(".clubs-list > ul");
        if (
          target.closest(".club-select") &&
          listClub.style.display !== "block"
        ) {
          listClub.style.display = "block";
        } else if (
          target.closest(".club-select") &&
          listClub.style.display === "block"
        ) {
          listClub.style.display = "none";
        }

        //! PopUp-1
        const popUp1 = document.getElementById("free_visit_form");
        if (target.closest(".free-visit")) {
          popUp1.style.display = "block";
        }
        popUp1.addEventListener("click", (event) => {
          const target = event.target;

          if (target.matches(".overlay") || target.closest(".close-form")) {
            popUp1.style.display = "none";
          }
        });

        //! PopUp-2
        const popUp2 = document.getElementById("callback_form");
        if (target.closest(".callback-btn")) {
          popUp2.style.display = "block";
        }
        popUp2.addEventListener("click", (event) => {
          const target = event.target;

          if (target.matches(".overlay") || target.closest(".close-form")) {
            popUp2.style.display = "none";
          }
        });
      });
      //! PopUp-gift
      //BUG Переделать функцию
      const popUp3 = document.getElementById("gift");
      const giftBtn = document.querySelector(".fixed-gift > img");
      giftBtn.addEventListener("click", (event) => {
        //Todo Не работает клик по самой кнопке
        const target = event.target;

        giftBtn.remove();
        popUp3.style.display = "block";
      });

      popUp3.addEventListener("click", (event) => {
        const target = event.target;

        if (
          target.matches(".overlay") ||
          target.closest(".close-form") ||
          target.closest(".close-btn")
        ) {
          popUp3.style.display = "none";
        }
      });

      //! POPUP thanks

      //BUG Переделать функцию
      const popUp4 = document.getElementById("thanks");

      popUp4.addEventListener("click", (event) => {
        const target = event.target;

        if (
          target.matches(".overlay") ||
          target.closest(".close-form") ||
          target.closest(".close-btn")
        ) {
          popUp4.style.display = "none";
        }
      });
    };
    headerClicker();

    //? Бургер меню
    const burgerMenu = () => {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          const bigMenu = document.querySelector(".hidden-small");
          const smallMenu = document.querySelector(".menu-button");

          smallMenu.style.display = "block";
          bigMenu.style.display = "none";
        } else {
          const bigMenu = document.querySelector(".hidden-small");
          const smallMenu = document.querySelector(".menu-button");

          smallMenu.style.display = "none";
          bigMenu.style.display = "flex";
        }
      });

      const topMenu = document.querySelector(".top-menu");
      const headSlider = document.querySelector(".head-slider");

      window.addEventListener("scroll", () => {
        const offsetTop = headSlider.getBoundingClientRect().top;

        if (offsetTop <= 0 && window.innerWidth < 768) {
          topMenu.style.position = "fixed";
        } else {
          topMenu.style.position = "static";
        }
      });
    };
    burgerMenu();

    //? Главный слайдер
    const startMainSlider = (interval) => {
      const slides = document.querySelectorAll(".main-slider > .slide");
      const slidesCount = slides.length;

      let count = 0;
      let countNext = 1;
      setInterval(() => {
        slides[count].style.display = "none";
        slides[countNext].style.display = "flex";
        count++;
        countNext++;
        if (count === slidesCount) {
          count = 0;
          //slides[0].style.display = 'flex'
        }
        if (countNext === slidesCount) {
          countNext = 0;
        }
      }, interval);
    };
    startMainSlider(5000);

    const arrowToUp = () => {
      const toTop = document.querySelector("#totop");
      toTop.style.display = "none";
      window.addEventListener("scroll", (event) => {
        const clubsSection = document.querySelector("#clubs");

        if (clubsSection.getBoundingClientRect().top <= 0) {
          toTop.style.display = "block";
        } else {
          toTop.style.display = "none";
        }
      });
    };

    arrowToUp();
  } catch {
    //! POPUP thanks

    //BUG Переделать функцию
    const popUp4 = document.getElementById("thanks");

    popUp4.addEventListener("click", (event) => {
      const target = event.target;

      if (
        target.matches(".overlay") ||
        target.closest(".close-form") ||
        target.closest(".close-btn")
      ) {
        popUp4.style.display = "none";
      }
    });

    //? Бургер меню
    const burgerMenu = () => {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          const bigMenu = document.querySelector(".hidden-small");
          const smallMenu = document.querySelector(".menu-button");

          smallMenu.style.display = "block";
          bigMenu.style.display = "none";
        } else {
          const bigMenu = document.querySelector(".hidden-small");
          const smallMenu = document.querySelector(".menu-button");

          smallMenu.style.display = "none";
          bigMenu.style.display = "flex";
        }
      });

      const topMenu = document.querySelector(".top-menu");
      const headSlider = document.querySelector(".head-slider");

      window.addEventListener("scroll", () => {
        const offsetTop = headSlider.getBoundingClientRect().top;

        if (offsetTop <= 0 && window.innerWidth < 768) {
          topMenu.style.position = "fixed";
        } else {
          topMenu.style.position = "static";
        }
      });
    };
    burgerMenu();

    //? Главный слайдер
    const startMainSlider = (interval) => {
      const slides = document.querySelectorAll(".main-slider > .slide");
      const slidesCount = slides.length;

      let count = 0;
      let countNext = 1;
      setInterval(() => {
        slides[count].style.display = "none";
        slides[countNext].style.display = "flex";
        count++;
        countNext++;
        if (count === slidesCount) {
          count = 0;
          //slides[0].style.display = 'flex'
        }
        if (countNext === slidesCount) {
          countNext = 0;
        }
      }, interval);
    };
    startMainSlider(5000);

    const arrowToUp = () => {
      const toTop = document.querySelector("#totop");
      toTop.style.display = "none";
      window.addEventListener("scroll", (event) => {
        const clubsSection = document.querySelector(".breadcrumbs");

        if (clubsSection.getBoundingClientRect().top <= 0) {
          toTop.style.display = "block";
        } else {
          toTop.style.display = "none";
        }
      });
    };

    arrowToUp();
  }
};

export default headerFuncs;
