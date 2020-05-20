//? Калькулятор

const calc = () => {
  try {
    const cardOrder = document.querySelector("#card_order");

    const monthsBlock = document.querySelector(".time");
    const monthsBtns = document.querySelectorAll(".time>label");
    const monthsInputs = document.querySelectorAll(".time>input");

    const clubs = document.querySelectorAll(".club");

    const promo = document.querySelector('input[placeholder="Промокод"]');

    const priceTotal = document.querySelector("#price-total");

    const checkMozaika = document.querySelector("#card_leto_mozaika");
    const checkSchelkovo = document.querySelector("#card_leto_schelkovo");

    const regExp = "ТЕЛО2019";

    window.addEventListener("load", () => {
      if (promo) {
        promo.value = "";
      }
    });

    const pricesMozaika = {
      oneMonth: 1999,
      sixMonths: 9900,
      nineMonths: 13900,
      twelveSoloMonths: 19900,
    };

    const pricesSchelkovo = {
      oneMonth: 2999,
      sixMonths: 14900,
      nineMonths: 21990,
      twelveSoloMonths: 24990,
    };

    priceTotal.textContent = pricesMozaika.oneMonth;

    let price = 0;
    let onePromoUse = false;

    const promoExist = () => {
      //const price = priceTotal.textContent;
      if (onePromoUse === false) {
        priceTotal.textContent = parseInt(price - (price * 30) / 100);
      } else {
        return;
      }
    };
    //? Кликер
    cardOrder.addEventListener("click", (event, index) => {
      const target = event.target;

      if (target.closest(".time")) {
        if (checkMozaika.checked) {
          switch (target.getAttribute("for")) {
            case "m1":
              priceTotal.textContent = pricesMozaika.oneMonth;
              price = pricesMozaika.oneMonth;
              break;
            case "m2":
              priceTotal.textContent = pricesMozaika.sixMonths;
              price = pricesMozaika.sixMonths;
              break;
            case "m3":
              priceTotal.textContent = pricesMozaika.nineMonths;
              price = pricesMozaika.nineMonths;
              break;
            case "m4":
              priceTotal.textContent = pricesMozaika.twelveSoloMonths;
              price = pricesMozaika.twelveSoloMonths;
              break;
          }
          if (promo.value === regExp) {
            promoExist();
          }
        } else if (checkSchelkovo.checked) {
          switch (target.getAttribute("for")) {
            case "m1":
              priceTotal.textContent = pricesSchelkovo.oneMonth;
              price = pricesSchelkovo.oneMonth;
              break;
            case "m2":
              priceTotal.textContent = pricesSchelkovo.sixMonths;
              price = pricesSchelkovo.sixMonths;
              break;
            case "m3":
              priceTotal.textContent = pricesSchelkovo.nineMonths;
              price = pricesSchelkovo.nineMonths;
              break;
            case "m4":
              priceTotal.textContent = pricesSchelkovo.twelveSoloMonths;
              price = pricesSchelkovo.twelveSoloMonths;
              break;
          }
          if (promo.value === regExp) {
            promoExist();
          }
        }
      }
    });

    clubs.forEach((el, index) => {
      el.addEventListener("click", (event) => {
        const target = event.target;

        if (index === 1) {
          monthsInputs.forEach((elem) => {
            if (elem.checked) {
              switch (elem.getAttribute("id")) {
                case "m1":
                  priceTotal.textContent = pricesSchelkovo.oneMonth;
                  price = pricesSchelkovo.oneMonth;
                  break;
                case "m2":
                  priceTotal.textContent = pricesSchelkovo.sixMonths;
                  price = pricesSchelkovo.sixMonths;
                  break;
                case "m3":
                  priceTotal.textContent = pricesSchelkovo.nineMonths;
                  price = pricesSchelkovo.nineMonths;
                  break;
                case "m4":
                  priceTotal.textContent = pricesSchelkovo.twelveSoloMonths;
                  price = pricesSchelkovo.twelveSoloMonths;
                  break;
              }
            }
            if (promo.value === regExp) {
              promoExist();
            }
          });
        } else if (index === 0) {
          monthsInputs.forEach((elem) => {
            if (elem.checked) {
              switch (elem.getAttribute("id")) {
                case "m1":
                  priceTotal.textContent = pricesMozaika.oneMonth;
                  price = pricesMozaika.oneMonth;
                  break;
                case "m2":
                  priceTotal.textContent = pricesMozaika.sixMonths;
                  price = pricesMozaika.sixMonths;
                  break;
                case "m3":
                  priceTotal.textContent = pricesMozaika.nineMonths;
                  price = pricesMozaika.nineMonths;
                  break;
                case "m4":
                  priceTotal.textContent = pricesMozaika.twelveSoloMonths;
                  price = pricesMozaika.twelveSoloMonths;
                  break;
              }
              if (promo.value === regExp) {
                promoExist();
              }
            }
          });
        }
      });
    });

    //TODO Доделать промокод

    //? Промокод

    cardOrder.addEventListener("input", (event) => {
      const target = event.target;

      if (target === promo) {
        if (target.value === regExp) {
          promoExist();
        } else {
          priceTotal.textContent = price;
        }
      }
    });
  } catch {
    return 0;
  }
};

export default calc;
