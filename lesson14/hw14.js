// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

let money = 20;
function wakeUp(timeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeUp >= 8.00 && timeUp <= 8.30) {
                let eat = 8.45;
                console.log('Wake up' + timeUp);
                resolve(eat);
            } else {
                console.log('Вставай раніше');
                reject("You sleep your work")
            }
        }, 300)
    })
}

function eatMorningTime(timeToEat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeToEat === 8.45) {
                let shover = 9.00;
                console.log('я поїв' + timeToEat)
                resolve(shover);
            } else {
                reject('you dont eat?');
            }
        }, 1000)
    })
}

function showerForMorning(showerGel) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (showerGel === 9.00) {
                console.log('Помився' + showerGel)
                resolve(money)
            } else {
                console.log('Ти не вмиваэшся?')
                reject('Абра Кадбра')
            }
        }, 200)
    })
}

function waitTeBus(dollars) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dollars > 5) {
                money -= 5;
                let job = 17.00;
                console.log('бус приїхав не за графіком')
                resolve(job)
            } else {
                reject('бус не приїхав')
            }
        }, 2000)
    })
}

function work(jobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (jobDone === 17.00) {
                console.log('робота зоблена' + jobDone)
                resolve(money)
            } else {
                reject('Ти не на роботі');
            }
        }, 4000)
    })
}

function dinnertime(dollarsToT) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dollarsToT > 10) {
                let end = 'Ура ти все виконав';
                console.log('я повечеряв о 21:00')
                resolve(end);
            } else {
                reject('Ти забу щось зробити')
            }
        }, 100)
    })
}

//wakeUp(true);
//eatMorningTime(true);
//showerForMorning(x = 'done');
//waitTeBus(y='done');
//work(true);
//dinnertime(o='done');
//try {
//   wakeUp(true)
//
//       .then(prosnuvsa => {
//           return eatMorningTime(prosnuvsa)
//       })
//       .then(showMorning => {
//           return showerForMorning(showMorning)
//       })
//       .then(arrive => {
//           return waitTeBus(arrive)
//       })
//       .then(jobIsDone => {
//           return work(jobIsDone)
//       })
//       .then(eatDone => {
//           console.log(eatDone);
//           return dinnertime(eatDone)
//       });
//} catch (e){
//   console.log(e)
//}

async function dayPlan() {
    await wakeUp(8.15);
    await eatMorningTime(8.45);
    await showerForMorning(9.00);
    await waitTeBus(money);
    await work(17.00);
    await dinnertime(money);
    console.log(money)
}

dayPlan();
console.log(money)

async function dayPlan(){
    let wake = await wakeUp(true);
    let eat1 = await eatMorningTime(wake);
    let shower = await showerForMorning(eat1);
    let wait = await waitTeBus(shower);
    let worked = await work(wait);
    let dinT = await dinnertime(worked);

    console.log(wake, 'ВСТАВ');
    console.log(eat1, 'ПОЄВ');
    console.log(shower, 'БУС');
    console.log(wait, 'робота');
    console.log(worked, 'Зробив');
    console.log(dinT, 'Кінець');
}

dayPlan();

