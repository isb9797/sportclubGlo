const slider = () => {
  const slider = document.querySelector(".gallery-slider"),
    slide = slider.querySelectorAll(".slide"),
    dotsContainer = slider.querySelector(".dots");

  let currentSlide = 0,
    interval,
    dot;

  slide[0].classList.add('slide-active');

  dotsContainer.style.cssText = `
      display: flex;
      justify-content: space-between;
      width: 300px; 
      height: 10px;
      margin: 0 auto;
      margin-top: -20px
    `;



  slider.style.position = 'relative';


  const addDot = () => {
    currentSlide = 0;
    for (let i = 0; i < slide.length; i++) {
      const dot = document.createElement("div");
      dotsContainer.appendChild(dot);
      dot.classList.add("dot");

      if (i === 0) {
        dot.classList.add("active");
      }
    }
    dot = document.querySelectorAll(".dot");
  };

  addDot();

  const dots = document.querySelectorAll('.dot');

  dots.forEach(el => {
    el.style.cssText = `
      background-color: #fff;
      width: 15%;
      height: 10px;
      cursor: pointer;
    `;
  });

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, "slide-active");
    prevSlide(dot, currentSlide, "active");
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }


    nextSlide(slide, currentSlide, "slide-active");
    nextSlide(dot, currentSlide, "active");
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };


  slider.addEventListener("click", event => {
    event.preventDefault();

    const target = event.target;

    if (!target.closest(".next,.prev,.dot")) {
      return;
    }

    prevSlide(slide, currentSlide, "slide-active");
    prevSlide(dot, currentSlide, "active");

    if (target.closest(".next")) {
      currentSlide++;
    } else if (target.closest(".prev")) {
      currentSlide--;
    } else if (target.matches(".dot")) {
      dot.forEach((element, index) => {
        if (element === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, "slide-active");
    nextSlide(dot, currentSlide, "active");
  });

  slider.addEventListener("mouseover", event => {
    const target = event.target;
    
      stopSlide();
    
  });

  slider.addEventListener("mouseout", event => {
    const target = event.target;
    
      startSlide();
    
  });

  startSlide();
};

export default slider;
