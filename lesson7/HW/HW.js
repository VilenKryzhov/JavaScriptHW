//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, userName, surName, email, phone) {
    this.id = id;
    this.username = userName;
    this.surname = surName;
    this.email = email;
    this.phone = phone;

}

let array = [
    user1 = new User(1, 'Vilen', 'Kryzhov', 'vil@gmail.com', '0969019229'),
    user2 = new User(2, 'Daria', 'Kryzhova', 'dar@gmail.com', '0969019280'),
    user3 = new User(3, 'Serhii', 'Kryzhov', 'ser@gmail.com', '0969019213'),
    user4 = new User(4, 'Oksana', 'Kryzhova', 'oks@gmail.com', '0969012349'),
    user5 = new User(5, 'Sofia', 'Kryzhova', 'soa@gmail.com', '0969011234')
];

console.log(array);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let arr1 = array.filter(user => {
    return user.id % 2 === 0
});
console.log(arr1);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let arr2 = array.sort((a, b) => {
    return b.id - a.id
})
console.log(arr2);


//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

let newArray = [
    client1 = new Client(1, 'Vilen', 'Kryzhov', 'asd@gmail.com', '38096785748', ['milk', 'orange', 'sneakers', 'water']),
    client2 = new Client(2, 'Oksana', 'Kryzhov', 'asd@gmail.com', '38096785748', ['milk1', 'orange1', 'sneakers1', 'water1', 'water2', 'yogurt']),
    client3 = new Client(3, 'Daria', 'Kryzhov', 'asd@gmail.com', '38096785748', ['milk2', 'orange2', 'sneakers2', 'water2', 'water1', 'water2', 'yogurt']),
    client4 = new Client(4, 'Serhii', 'Kryzhov', 'asd@gmail.com', '38096785748', ['milk3', 'orange3', 'sneakers3']),
    client5 = new Client(5, 'Sofia', 'Kryzhov', 'asd@gmail.com', '38096785748', ['milk4', 'orange4']),
]
console.log(newArray);
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort = newArray.sort((a, b) => {
    return a.order.length - b.order.length
})
console.log(sort);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, madeIn, year, maxSpeed, totalStrong, totalMotor) {
    this.model = model;
    this.madeIn = madeIn;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.totalStrong = totalStrong;
    this.totalMotor = totalMotor;
    this.drive = function () {
        console.log('їдемо зі швидкістю' + ' ' + `${this.maxSpeed}`)
    }
    this.info = function () {
        for (let keys in this) {
            console.log(keys + `-` + this[keys]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed + newSpeed);
    }
    this.changeYear = function (newValue) {
        return this.year = newValue;
    }
    this.addDriver = function (driver) {
        return this.driver = driver
    }
};
let car1 = new Car('Tesla', 'USA', 2020, 250, 400, 'electric',);
console.log(car1.changeYear(2013));
console.log(car1);


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class newCar extends Car {
    constructor(model, madeIn, year, maxSpeed, totalStrong, totalMotor, create) {
        super(model, madeIn, year, maxSpeed, totalStrong, totalMotor);
        this.my = create;
    }
}

let newcar1 = new newCar('BMW', 'Germany', 2023, 300, 540, 250, 'Create by Vilen', '')
console.log(newcar1.changeYear(2000));
console.log(newcar1);
console.log(newcar1.addDriver('GOGO'));
console.log(newcar1);


//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class popelushka {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let arrius = [
    popel1 = new popelushka('Ania', 153, 9.5),
    popel2 = new popelushka('An123ia', 1235, 93.5),
    popel3 = new popelushka('Ania213', 125, 9.5),
    popel4 = new popelushka('Ania1', 125, 9.5),
    popel5 = new popelushka('Ani123a', 125, 91.5)
];


//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends popelushka {
    constructor(name, age, findShoes) {
        super(name, age);
        this.findShoes = findShoes;
    }
}

let prince1 = new Prince('Ivan', 23, 93.5)
let finder = (array, prince) => {
    for (item of array) {
        if (item.sizeFoot === prince.findShoes) {
            console.log('ти знайшов свою попелюшку під назвою' + ' ' + item.name)
        }
    }
}
finder(arrius,prince1);

//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find1 = arrius.find((item) => item.sizeFoot === prince1.findShoes);
console.log(find1);