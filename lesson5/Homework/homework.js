// 1. - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    let numTriangle = (a,b) => a*b ;

    console.log(numTriangle(2,5));



// 2.- створити функцію яка обчислює та повертає площу кола з радіусом r
    let numCircle = (r) =>{
        Pi = 3.14;
        let result;
        result = Pi*(r**2);
        return result;
    }
    console.log(numCircle(20));


// 4.- створити функцію яка приймає масив та виводить кожен його елемент
 //   let takearray = (...xxx) => {
 //       for (const arrElement of xxx) {
//            console.log(arrElement);
//        }
//    };


//    takearray(a,s,d,f);



// 5.- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
    let paragraph = (text) =>{
        document.write(`<p>${text}</p>`)
    };

    paragraph ('Пивіт, мене звати Вілен.')



// 6.- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    let li = (info) =>{
        document.write(`<ul>`)
            document.write(`<li>${info}</li>`)
            document.write(`<li>${info}</li>`)
            document.write(`<li>${info}</li>`)
        document.write(`</ul>`)
    }
    li('Hello')


// 7.- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let li2 = (info, size) =>{
    document.write(`<ul>`)
    for (let i =0; i<size; i++) {
        document.write(`<li>${info}</li>`)
    }
    document.write(`</ul>`)
}
li2('Hello', 6);


// 8.- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    let spysok = (array) => {
        for (const arrayElement2 of array) {
            console.log(arrayElement2);
        }
    }
//    spysok([1,'hello', true, false,3]);

// 9.- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    let konst = (arr) => {
        for (const arr0 of arr) {
            document.write(`<div>${arr0.id} ${arr0.name} ${arr0.age}</div>`)
        }
    }

    arr8= [
        {
            id: 123,
            name: 'Vilen',
            age: 23
        },
        {
            id: 456,
            name: 'Daria',
            age: 22
        }
    ];
    konst(arr8);

// створити функцію яка повертає найменьше число з масиву
    let lowNumber = (b) => {
        for (let i = 0; i<b.length; i++){
        console.log(Math.min(...b));
        }
    }
    lowNumber([7,2,3,4,5,6]);

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
    let total = 0;
let totalnum = (c) => {
        for ( let i = 0 ; i<c.length; i++){
             total += c[i];
        }
        return total;
    }
    let m = [1,5,7,3,6];
    console.log(totalnum(m));


// створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
    let changearr = (arr) => {
        let newarr = [];
        for ( let i = arr.length -1; i>=0; i--){
            newarr.push(arr[i]);
        }
        return newarr;
    }
    console.log(changearr(arr8));

arr8= [
    {
        id: 123,
        name: 'Vilen',
        age: 23
    },
    {
        id: 456,
        name: 'Daria',
        age: 22
    }

];
// 1.- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// 2.- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numLow = (a,b,c) => {
    if (a<b &&a<c){
        console.log(a);
    } else if (a>b &&c>b){
        console.log(b);
    }else if (a>c &&b>c){
        console.log(c);
    } else{
        console.log('none');
    }
}
    numLow(4,2,3);




// 3.- створити функцію яка повертає найбільше число з масиву
// 4.- створити функцію яка повертає найменьше число з масиву
let lowNumber9 = (b) => {
    for (let i = 0; i<b.length; i++){
        console.log(Math.max(...b));
    }
}
lowNumber9([7,2,3,4,5,6]);

// 6.- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    let totalnum1 = 0;
    let totalOfnum = (argument) => {
        for (const argumentElement of argument) {
            totalnum1 += argumentElement;
        }
        return totalnum1 / argument.length;
    }
    console.log(totalOfnum([5,5,5,5]));




// 7.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
    let asd = (arr10) => {
        let minValue = arr10[0];
        let maxValue = arr10[0];
        for (let num of arr10) {
            if (maxValue < num){
                maxValue = num;
            } else if (minValue > num){
                minValue = num;
            }
        }
        console.log(maxValue);
        return minValue;
    }

console.log(asd([4,5,9,12]));

// 8.- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// 9.- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
    let randomizer = (arr, limit) => {
        for (i = 0; i<20; i++){
            arr[i]= Math.round(Math.random()*limit);
        }
        return arr
    }

    console.log(randomizer([], 12));





// 10.- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
    let reversearr = (arr) =>{
        let arr1 = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                arr1.push(arr[i]);
        }
            return arr1;
    }
    console.log(reversearr([1,2,3]));




