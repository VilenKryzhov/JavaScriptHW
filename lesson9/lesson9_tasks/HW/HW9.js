//Все робити за допомоги js.
//- створити блок,
let div = document.createElement('div');
div.innerText = 'asdqwe'
//    - додати йому класи wrap, collapse, alpha, beta
//div.classList.add('wrap', 'collaps', 'alpa', 'data');
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'blue';
div.style.color = 'yellow';
div.style.fontSize = '20px';
//- додати цей блок в body.
document.body.appendChild(div);
//- клонувати його повністю, та додати   div в body.
document.body.appendChild(div.cloneNode(true));


//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.
//for (const item of coursesAndDurationArray) {
// let createDiv = document.createElement('div');
// createDiv.innerText = `${item.title}  ${item.monthDuration}`;
// document.body.appendChild(createDiv);

//}


//- Є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//за допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');


    h1.innerText = `${item.title}`
    p.innerText = `${item.monthDuration}`;

    document.body.appendChild(div);
    div.appendChild(h1);
}


