// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').classList.add('sept-2021');

// b) робить шириниу елементу ul 400px
let elementUl = document.querySelector('ul');
elementUl.style.width = '200px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linklist = elementUl.children;
for (const linklistElement of linklist) {
    linklistElement.style.width = '50%'
}


// d) отримує текст який зберігається в елементі з класом listElement2
console.log(linklist[1].innerText);

// f) отримує всі елементи 'a' та додає їм клас anchor
let aCollection = document.getElementsByTagName('a');
for (let item of aCollection) {
    item.classList.add('anchor')
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
    if (item.textContent === 'link3') {
        item.style.fontSize = '40px'
    }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
    item.classList.add('element_XXX');
    item.textContent = 'XXX'
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let collection = document.getElementsByClassName('sub-header');
for (const coll of collection) {
//    coll.style.background = prompt('Вкажіть колір заднього фону');


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемeнту = content 2 segment . Колір отримати з prompt()
    if (coll.innerText === 'content 2 segment') {
//        coll.style.background = prompt('Вкажіть колір заднього фону');
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//    let content = document.getElementsByClassName('content_1');
//for (const contents of content) {
//    contents.textContent = 'asd'
//}

// l) отримати елементи p та змінити їм padding на 20px
    let paddingP = document.getElementsByTagName('p');
for (const itemOfP of paddingP) {
    itemOfP.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.innerText = ' sep-2021'
}