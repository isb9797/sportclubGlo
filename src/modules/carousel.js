//? Карусель сайта
const carousel = () => {
  try {
    const slider = document.querySelector(".services-slider");

    const slides = slider.querySelectorAll(".slide");
    const slidesCount = slides.length;
    const slidesOnPage = 5;
    const wrapperSlider = document.querySelector("#services > .wrapper");
    const services = document.querySelector("#services");

    const nextBtn = slider.querySelector(".slider-arrow.next");
    const prevBtn = slider.querySelector(".slider-arrow.prev");

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
          const step = 250;
          const ml = -parseInt(slides[0].style.marginLeft);

          const mlR = ml + step;
          slides[0].style.marginLeft = `-${mlR}px`;
        }
      };

      const prevService = () => {
        if (stepCount === 0) {
          return;
        } else {
          stepCount--;
          const step = 250;
          const ml = parseInt(slides[0].style.marginLeft);

          const mlR = ml + step;
          slides[0].style.marginLeft = `${mlR}px`;
        }
      };

      nextBtn.addEventListener("click", nextService);
      prevBtn.addEventListener("click", prevService);
    };

    startSet();
  } catch {
    return 0;
  }
};

export default carousel;
