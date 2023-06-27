//let wrapper = document.createElement('div');
//let newUser = localStorage.getItem('newObj');

//console.log(newUser)
//for (let item of JSON.parse(newUser)) {
//    let div = document.createElement('div');
//    div.innerText = `${item.name} ${item.age} ${item.status}`;
//    wrapper.append(div)
//}
//document.body.append(wrapper);


//-створити форму з інпутами для model,type та volume автівки.
//    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form = document.getElementById('car');
let button = document.getElementById('button');
let car = [];
button.onclick = function (e) {
    e.preventDefault();
    let arr = {
        model: form.model.value,
        type: form.type.value,
        volume: form.volume.value
    }
    car.push(arr);
    localStorage.setItem('obj', JSON.stringify(car))
};
let abc = localStorage.getItem('obj');
console.log(JSON.parse(abc))


