//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function back (a,b){
    let result = a+b;
    return result
}
let x = back(23,23);
console.log(x);


//- створити функцію яка обчислює та повертає площу кола з радіусом r
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//- створити функцію яка приймає масив та виводить кожен його елемент
    function backarr (a) {
        for ( let i = 0; i<a.length; i++ ) {
            console.log(a[i])
           }
    }
    let arr = ['stepan', 'oleh', 25, 'oksana', 'luba']
    backarr(arr);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//function backtext (text) {
//    document.write (`<h1>${text}</h1>`)
//}
//backtext('asjdhaskjfhdsakjfhskdjfhsjkdfh dsfsdfsdjf sjkdfhsdkjfhskdjfhsf');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 //function backtext (a,b,c){
 //   document.write(`<ul>`)
 //       document.write(`<li>${a}</li>`)
//        document.write(`<li>${b}</li>`)
 //       document.write(`<li>${c}</li>`)
 //   document.write(`</ul>`)
 //}
//backtext('wertyu df', 'dsfsdfsd', 'fdgdfgdfgdf')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//function backtext (a, size) {
//   for (let i = 0; i<size; i++) {
//       document.write(`<ul>`)
//           document.write(`<li>${a}</li>`)
//       document.write(`</ul>`)
//   }
//}

// backtext(12345, 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 //   function servicetypeoff (arr){
 //    document.write(`<ul>`)
 //       for ( const item of arr){
 //           document.write(`<li>${item}</li>`)
 //       }
 //    document.write(`</ul>`)
 //   }
  //      let x = [123, 2, 34, 12, 'asd', 'qwe', true, false];
//servicetypeoff(x);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//function takeid (arguments) {
//   for (const item of arguments) {
//       document.write(`<div>${item.name}---//${item.id}---${item.age}</div>`)


//   }
//}
//let x = [
//
//        name: "Vilen",
//        id: 784634,
//        age: 23
//    },
//{
//        name: "Daria",
//        id: 5675672456345,
//        age: 22
//    }
//];
//takeid(x);


//- створити функцію яка повертає найменьше число з масиву
//    function zero(arr){
//        for (let i = 0; i<arr.length; i++){
//            console.log(Math.min(...arr))
//        }

//    }
//    let asd = [8,7,67,9];

//    zero(asd);



//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
    let result = 0;
    function total (arr){
        for (let i=0; i<arr.length; i++){
         result += arr[i]
    }
    }
    total([13,14,15,16,72]);
    console.log(result);