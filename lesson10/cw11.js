// є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let favorites = [];
let divWrapper = document.createElement('div');
document.body.appendChild(divWrapper);

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let div = document.createElement('div');
    divWrapper.append(div);
    div.innerText = `${user.name} ${user.age} ${user.status}`
    let btn = document.createElement('button');
    div.append(btn);
    btn.innerText = 'ADD'
    btn.onclick = function () {
        favorites.push(user);
        localStorage.setItem('newObj', JSON.stringify(favorites))
    }
}
let button = document.createElement('button');
divWrapper.append(button);
button.innerText = 'SEND'
button.onclick = function () {
        location.href = 'favourites.html'
}
console.log(favorites)









function zamk(name, age) {


    let arr = {name: name, age: age};
    return {
        getName: () => arr.name,
        getAge: () => arr.age,
        setAge: (age) => {
            if (age > 0) {
                arr.age = age;
            }
        }
    }
}

let a = zamk('Vilen', 23);
console.log(a.getName());
console.log(a.getAge());
a.setAge(20);
console.log(a.getAge());



