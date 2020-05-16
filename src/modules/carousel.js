//? Карусель сайта
const carousel = () => {
  const slider = document.querySelector(".services-slider");

  const slides = slider.querySelectorAll(".slide");
  const slidesCount = slides.length;
  const slidesOnPage = 5;
  const wrapperSlider = document.querySelector("#services > .wrapper");
  const services = document.querySelector("#services");

  const nextBtn = document.querySelector(".slider-arrow.next");
  const prevBtn = document.querySelector(".slider-arrow.prev");
  console.log("nextBtn: ", nextBtn);

  const startSet = () => {
    slider.style.overflow = "hidden";
    slider.style.position = "relative";

    slider.style.justifyСontent = "space-between";
    slider.style.gap = "0.3rem";

    slides.forEach((slide) => {
      slide.style.cssText = "min-width: 210px";
    });
    slides[0].style.cssText =
      "min-width: 210px;transition: all 0.2s linear 0s; margin-left: 0px;";
    let stepCount = 0;
    const nextService = () => {
      if (stepCount === 5) {
        return;
      } else {
        stepCount++;
        let step = 250;
        let ml = -parseInt(slides[0].style.marginLeft);

        const mlR = ml + step;
        slides[0].style.marginLeft = `-${mlR}px`;

        console.log("mlR: ", mlR);
      }
    };

    const prevService = () => {
      if (stepCount === 0) {
        return;
      } else {
        stepCount--;
        let step = 250;
        let ml = parseInt(slides[0].style.marginLeft);

        const mlR = ml + step;
        slides[0].style.marginLeft = `${mlR}px`;

        console.log("mlR: ", mlR);
      }
    };

    nextBtn.addEventListener("click", nextService);
    prevBtn.addEventListener("click", prevService);
  };

  startSet();

  console.log("slidesCount: ", slidesCount);
};

export default carousel;
