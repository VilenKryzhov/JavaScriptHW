// 1.- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(a.length);


// 2.- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let a1 = 'hello world';
let b1 = 'lorem ipsum';
let c1 = 'javascript is cool';

console.log(c1.toUpperCase());


// 3.- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let a2 = 'hello world';
let b2 = 'lorem ipsum';
let c2 = 'javascript is cool';

console.log(c2.toLowerCase());


// 4.- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());


// 5.- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
let stringToArray = ((str1) => {
    return str1.split();
});
console.log(stringToArray('asd, 123, hgf'));


// 6.- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

let delete_characters = (str, index) => {
    return str.substring(0, index)
};
let str7 = 'Hello, my name is Daria';
console.log(delete_characters(str7, 8));


// 7.- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
let insert_dash = (str) => {
    return str.replaceAll(' ', '-')
};
let str8 = 'Hello, my name is Daria';
console.log(insert_dash(str8));


// 8.- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let UpperCase = (str10) => {
    return str10.charAt(0).toUpperCase() + str10.slice(1)
}

let str9 = 'hello, my name is Daria';
console.log(UpperCase(str9));

// 9.- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str11) => {
    return str11.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

}
let str12 = 'hello my name is daria'
console.log(capitalize(str12));
// 1.- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randomNumber = (limit) => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.round(Math.random() * limit));
    }

    return arr.sort(function (a, b) {
        return a - b;
    });
}
let arr = randomNumber(100);
console.log(arr);

let arr1 = arr.filter(words => {
    if (words % 2 === 0) {
        return true
    }
});
console.log(arr1);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr2 = arr1.map(word => {
    return word.toString();
})
console.log(arr2);
console.log(arr1);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
    let sortNums = (arr,direction) => {
        if (direction === 'ascending'){
            return arr.sort((function (a,b){ return a+b; }))
        } else if (direction ==='descending'){
            return arr.sort((function (a,b) { return b-a; }))
        }
    };

    let nums = [4,7,5];
    console.log(sortNums(nums,'descending'));










 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];

// -- відсортувати його за спаданням за monthDuration
    let newArr1 = coursesAndDurationArray.sort((a,b)=>{
        return b.monthDuration - a.monthDuration
    })
console.log(newArr1 );



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 let newArr = coursesAndDurationArray.filter(words=>{
     return words.monthDuration > 5;
 })
console.log(newArr);
