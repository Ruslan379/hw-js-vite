//! Урок-07 - приклад використання бібліотеки Handlebars в проєкті Vite
console.log("Підключено скрипт lesson-07.js");

// import '../css/reset.css'
// import '../css/lesson-07.css'
import Handlebars from "handlebars";


console.log(
    "%c LESSON-07 - Використання бібліотеки Handlebars ",
    "color: white; background-color: #D33F49",
);


//! Handlebars
// //! var.2 Приклад використання Handlebars з конспекту
console.warn("var.2 Приклад використання Handlebars з конспекту:");
// import Handlebars from 'handlebars'; //? підключено вище

const menuData2 = {
    title: '2.Eat it createElement, templates rule!',
    items: ['Handlebars-2', 'LoDash-2', 'Pug-2', 'EJS-2', 'lit-html-2']
};

const source = document.querySelector('#menu-template').innerHTML.trim();
const template2 = Handlebars.compile(source);

//? Створимо змінну markup, в яку запишемо
//? результат роботи функції-шаблону template.
const markup2 = template2(menuData2);

console.log("Вся розмітка (markup2): \n", markup2); //? Вся розмітка

//? Приклад вище схожий на операцію «пошук-і заміна»: шаблон просто
//? замінив {{title}} значення властивості menuData.title.
//? Після чого результат потрапив спочатку текст <ul>,
//? потім виконався {{#each items}}, який послідовно
//? згенерував елементи списку, а потім список був закритий </ul>.


//? У js виберемо контейнер по id, після чого використовуючи
//? властивість innerHTML додємо туди наш рядок.

const menuСontainer = document.querySelector('#menu-container');
menuСontainer.innerHTML = markup2;
//! ______________________________________________________________________________





//!: var.3 Використання Handlebars вручну (без Vite-плагіну)
// console.warn("var.3 Використання Handlebars вручну (без Vite-плагіну):");
// import Handlebars from 'handlebars'; //? підключено вище

// const menuData3 = {
//     title: '3.Eat it createElement, templates rule!',
//     items: ['Handlebars-3', 'LoDash-3', 'Pug-3', 'EJS-3', 'lit-html-3'],
// };
// const containerHandlebars03 = document.querySelector(".handlebars-var03");
// console.log("containerHandlebars03:", containerHandlebars03 );

// async function renderTemplate() {
//     const res = await fetch('../handlebars/template-3.hbs');
//     const templateText = await res.text();

//     const template = Handlebars.compile(templateText);
//     const renderedHTML = template(menuData3);
//     // console.log("Вся розмітка (renderedHTML): \n", renderedHTML); //? Вся розмітка

//     containerHandlebars03.innerHTML = renderedHTML;
// };

// renderTemplate();
//! ______________________________________________________________________________




//!: var.4 Використання Handlebars (ChatGPT + Михайло Шпег)
console.warn("var.4 Використання Handlebars (ChatGPT + Михайло Шпег):");
// import Handlebars from 'handlebars'; //? підключено вище
import userCardTemplate from "../handlebars/template-4.hbs?raw"; 

const template = Handlebars.compile(userCardTemplate);

const data = {
    name: "Марія",
    age: 24,
    isAdmin: true
};

const containerHandlebars04 = document.querySelector(".handlebars-var04");
console.log("containerHandlebars04:", containerHandlebars04 );

const html = template(data);
console.log("Вся розмітка (html): \n", html); //? Вся розмітка
containerHandlebars04.innerHTML = html;
//! ______________________________________________________________________________



//!: var.5 Використання Handlebars (HW-7)
console.warn("var.5 Використання Handlebars (HW-7):");
// import Handlebars from 'handlebars'; //? підключено вище
import productCard from "../handlebars/template-5.hbs?raw";
console.log("productCard:", productCard);

const containerHandlebars05 = document.querySelector(".handlebars-var05");
console.log("containerHandlebars05:", containerHandlebars05);

const template5 = Handlebars.compile(productCard);

//todo: var.5-1. Для одного елемента масиву:
// const product = {
//     id: 1,
//     name: 'Laptop',
//     price: 1500,
//     description: 'A high-performance laptop for all your needs.',
// }

// const markup5 = template5(product);
// console.log("Вся розмітка (markup5): \n", markup5); //? Вся розмітка
// containerHandlebars05.innerHTML = markup5;
//todo:________________________________________________________________


//todo: var.5-2. Для масиву об'єктів:
const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 1500,
        description: 'A high-performance laptop for all your needs.',
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 700,
        description: 'A modern smartphone with an excellent camera.',
    },
    {
        id: 3,
        name: 'Headphones',
        price: 200,
        description: 'Noise-cancelling headphones for better focus.',
    },
];

products.forEach(item => {
    console.log("item:", item);
    const markup5 = template5(item);
    console.log("Вся розмітка (markup5): \n", markup5); //? Вся розмітка
    containerHandlebars05.innerHTML += markup5; //! Кожен раз ДОДАЄ нову картку
});
//! ______________________________________________________________________________
console.log("---------------------------------------------------------------------------------------");


//!: Імпорт JSON-файла user.json в проєкті з бандлером Vite (lesson-08)
console.warn("Імпорт JSON-файла user.json в проєкті з бандлером Vite (lesson-08):");

import userJSON from "../json/user.json"
console.log("userJSON:", userJSON); //!   ❗️ userJSON - це вже об'єкт ❗️