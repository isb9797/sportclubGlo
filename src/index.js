"use strict";

//? Подключение полифилов для IE
import "nodelist-foreach-polyfill";
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "es6-promise";
import "fetch-polyfill"
import "remove-polyfill"

//? Подключение основных модулей

import headerFuncs from './modules/headerFuncs';
import carousel from './modules/carousel';


//? Функции шапки сайта
headerFuncs();

//? Карусель сайта
carousel();

