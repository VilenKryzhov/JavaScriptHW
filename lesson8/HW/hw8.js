// -- отримує текст з параграфа з id "content"
 let elementId = document.getElementById('content');
console.log(elementId.innerText);
console.log(elementId);


// -- отримує текст з блоку з id "rules"
let idRules = document.getElementById('rules');
console.log(idRules.innerText);


// -- замініть текст параграфа з id 'content' на будь-який інший
elementId.innerText = 'asdqwe';
console.log(elementId.innerText);


// -- замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerText = '12345678';
console.log(idRules.innerText);


// -- змініть кожному елементу колір фону на червоний
elementId.style.background = 'red';
idRules.style.background = 'red';
let rulesCollection = document.getElementsByClassName('fc_rules');
for (const rulesCollectionElement of rulesCollection) {
    rulesCollectionElement.style.background = 'red'
}
// -- змініть кожному елементу колір тексту на синій
elementId.style.color = 'blue';
idRules.style.color = 'blue';
for (const rulesCollectionElement of rulesCollection) {
    rulesCollectionElement.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classElement = document.getElementById('rules');
console.log(classElement.classList);
classElement.classList.add('bbb');
console.log(classElement.classList);
classElement.classList.remove('bbb');
console.log(classElement.classList);



// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const rulesCollectionElement of rulesCollection) {
    rulesCollectionElement.style.color = 'green'
}
console.log(rulesCollection[1]);

