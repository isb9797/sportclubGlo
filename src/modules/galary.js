//? Галерея

const galary = () => {
  try {
    const galary = document.querySelector(".gallery-slider");
    const slides = galary.querySelectorAll(".slide");
    const galaryLength = slides.length;
    const nextBtn = galary.querySelector(".slider-arrow.next");
    const prevBtn = galary.querySelector(".slider-arrow.prev");

    let interval;

    let count = 1;
    const maxCount = galaryLength - 1;

    galary.style.position = "relative";

    const startSet = () => {
      slides.forEach((slide, index) => {
        if (index > 0) {
          slide.style.display = "none";
        }
      });
    };

    startSet();

    const autoPlay = () => {
      if (count <= maxCount) {
        slides[count].style.display = "block";
        slides[count - 1].style.display = "none";
        count++;
      } else if (count > maxCount) {
        slides[maxCount].style.display = "none";
        slides[0].style.display = "block";
        count = 1;
      }
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlay, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    galary.addEventListener("mouseover", () => {
      stopSlide();
    });

    galary.addEventListener("mouseout", () => {
      startSlide();
    });

    const nextSlide = () => {
      if (count <= maxCount) {
        slides[count].style.display = "block";
        slides[count - 1].style.display = "none";
        count++;
      } else if (count > maxCount) {
        slides[maxCount].style.display = "none";
        slides[0].style.display = "block";
        count = 1;
      }
    };

    nextBtn.addEventListener("click", nextSlide);

    const prevSlide = () => {
      if (count > 0) {
        slides[count].style.display = "none";
        slides[count - 1].style.display = "block";
        count--;
      } else if (count === 0) {
        slides[0].style.display = "none";
        slides[maxCount].style.display = "block";
        count = maxCount;
      }
    };

    prevBtn.addEventListener("click", prevSlide);

    startSlide();
  } catch {
    return 0;
  }
};

export default galary;
