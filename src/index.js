

//? Подключение полифилов для IE
import "nodelist-foreach-polyfill";
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "es6-promise";
import "fetch-polyfill";
import "remove-polyfill";

//? Подключение основных модулей

import maskPhone from './modules/maskPhone';
import checkInputWord from './modules/checkInputWord';
import headerFuncs from './modules/headerFuncs';
import carousel from './modules/carousel';
import calc from './modules/calc';
import slider from './modules/galaryAlt';
import sendForm from "./modules/sendForm";



//? Маска для ввода телефона
maskPhone('input[placeholder="Ваш номер телефона..."]');

//? Функции шапки сайта
headerFuncs();

//? Валидация
checkInputWord('input[placeholder="Ваше имя..."]');

//? Карусель сайта
carousel();

//? Галерея
slider();

//? Калькулятор
calc();

//? Отправка форм
sendForm();


