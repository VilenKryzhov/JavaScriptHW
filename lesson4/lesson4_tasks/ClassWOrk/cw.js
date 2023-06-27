// 1.- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// 2.- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//    function totalbig (a, b, c) {
 //       if (a < b && a < c) {
 //           console.log(a)
 //       } else if (b < a && b < c) {
 //           console.log(b)
 //       } else if (c < b && c < a) {
 //           console.log(c)
 //       }
 //   }

//    totalbig(104, 64, 104);





// 3.- створити функцію яка повертає найбільше число з масиву
// 4.- створити функцію яка повертає найменьше число з масиву
 //   function backnumber(){
 //       for (let i=0; i<arguments.length; i++){
 //           console.log(Math.min(...arguments[i]))
 //       }
//   }
//    backnumber([12, 52, 68,145]);





// 5.- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
  //  let result = 0;
   //     function back(arr){
  //          for (let i = 0; i < arr.length; i++) {
   //             result += arr[i];
  //          }
   //         return result;
  //  }
  //  let x = [12, 123, 124];
  //      console.log(back(x));


// 6.- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
   //let total = 0;
//function backnumber(arr){
 //      for (let i=0; i<arr.length; i++){
 //          total += arr[i];
 //      }
 //      return total / arr.length;
 //  }
 //  let num = [2,4,6,8,10]
 //  console.log(backnumber(num));//


// 7.- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//function backnumber(){
 //      for (let i=0; i<arguments.length; i++){
 //          console.log(Math.min(...arguments[i]))
 //     }
 //  }


// 8.- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
    function random(arr){
        for (let i = 0; i < 21; i++){
            arr[i] = Math.round(Math.random()*100)
        }
        return arr
    }
    let x = random([]);





// 9.- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.



// 10.- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
    function reverse (){
    let arr1= [];
        for (let i = arguments.length - 1;  i>=0 ; i--){
            arr1.push(arguments[i]);
        }
        return arr1
    }
    let xa = [1,2,3,5,6]
    console.log(x);

