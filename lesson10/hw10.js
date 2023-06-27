// 1.- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// 2.- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

//let div = document.createElement('div');
//let button1 = document.createElement('button');
//document.body.append(div);
//document.body.append(button1);
//div.classList.add('text');
//button1.innerText = 'Save';
//button1.onclick = function () {
//    div.classList.toggle('text')
//};
//div.onclick = function (){
//    div.classList.toggle('text');
//}


// 3.- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.createElement('form');
let input = document.createElement('input');
form.action = '/someaction';
input.type = 'number';
input.name = 'age';
let button = document.createElement('button');
button.innerText = 'Send';
form.append(input, button);
document.body.appendChild(form);

form.onsubmit = function (e) {
    e.preventDefault();
}
button.onclick = function () {
    if (input.value > 18) {
        console.log(input.value);
    } else {
        console.log('Малеьникий вік')
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menuList = ['Ivan', 'Andrii', 'Serhii', 'Mykola'];
let button12 = document.createElement('button');
button12.innerText = 'Open';

let div = document.createElement('div');
div.classList.add('newClass')

for (let name of menuList) {
    let liList = document.createElement('li');
    liList.innerText = name;
    div.appendChild(liList)
}
document.body.appendChild(div);
document.body.appendChild(button12);

button12.onclick = function () {
    div.classList.toggle('newClass')
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comment = {
    title: 'lorem',
    body: 'lorem ipsum dolo sit ameti'
};

let div1 = document.createElement('div');
let div2 = document.createElement('div');

document.body.append(div1, div2);
div1.innerText = comment.title;
div2.innerText = comment.body;
div1.style.marginTop = '10px';
div2.style.marginTop = '10px';
div1.classList.add('class1');
div2.classList.add('class2');

let button1 = document.createElement('button');
let button2 = document.createElement('button');

button1.innerText = 'close/open';
button2.innerText = 'close/open';

document.body.append(button1, button2);

button1.onclick = function () {
    div1.classList.toggle('class1')
}
button2.onclick = function () {
    div2.classList.toggle('class2')
}


// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
//     если A < B, или в порядке убывания в противном случае.

let sum = (a, b) => {
    if (a > b) {
        for (let i = a; i > b; i--) {
            console.log(i)
        }
    } else if (a < b) {
        for (let i = a; i < b; i++) {
            console.log(i)
        }
    }
}
sum(87, 130);

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//let number = (n) => {
//   if (n<11){
//       number(n+1)
//    }
//    console.log(n)
//};
//number(1);




