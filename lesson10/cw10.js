// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btn = document.getElementById("button");
let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')

btn.onclick = function () {
    console.log(form1.ClassText1.value)
    console.log(form1.ClasNumber1.value)
    console.log(form2.ClassText2.value)
    console.log(form2.ClasNumber2.value)
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arr = ['Bitch', 'Clown', 'Asshole'];

let badWordsInput = document.getElementById('Bad');
let BadButton = document.getElementById('BadButton');

BadButton.onclick = () => {
    for (let item of arr) {
        if (badWordsInput.value.includes(item)) {
            alert('asd')
        } else (console.log(badWordsInput.value))
    }
    console.log(badWordsInput.value);
};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let form3 = document.getElementById('form3');
let button = document.getElementById('button');

button.addEventListener('click', function () {
    let totalR = form3.riadky.value;
    let totalY = form3.yacheyki.value;
    let totalW = form3.proyacheyki.value

    function add(totalR, totalY, totalW) {
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.style.display = 'flex';


        for (i = 0; i < totalR; i++) {
            let div1 = document.createElement('div');
            div1.style.border = '2px solid red';
            div.appendChild(div1)
            for (j = 0; j < totalY; j++) {
                let div2 = document.createElement('div');
                div2.style.border = '2px solid green';
                div2.innerText = totalW;
                div1.appendChild(div2)
            }
        }
    }

    add(totalR, totalY, totalW);
});

navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

})
console.log(navigator)
let info = function () {
    document.body.addEventListener("click", function (e) {
        console.log(`Назва тегу - ${e.target.localName} Список класів${e.target.classList} Список ID -${e.target.id} Розмір - ${e.target.offsetWidth} X ${e.target.offsetHeight}`);
    })
}
info();