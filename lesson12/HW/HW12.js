// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

//let wrapper = document.getElementsByClassName('wrapper')[0];

//fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(value => value.json())
//    .then(value => {
//        console.log(value)
//        for (let item of value) {
//            let div = document.createElement('div');
//            div.classList.add('head')
//            let h = document.createElement('h');
//            h.innerText = `user iD - ${item.userId}; ID - ${item.id}`
//            let title = document.createElement('div');
//            title.innerText = `${item.title}`;
//            let p = document.createElement('p');
//            p.innerText = `${item.body}`
//            div.append(h,title,p);
//        wrapper.append(div);
//        }
//    })


//2.
// Отримати відповідь з цього ресурсу , та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
let wrapper = document.getElementsByClassName('wrapper')[0];
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value)
        for (let item of value) {
            let div = document.createElement('div');
            div.classList.add('head')
            let h = document.createElement('h');
            h.innerText = `ID - ${item.id}`
            let title = document.createElement('div');
            title.innerText = `${item.name}`;
            let p = document.createElement('p');
            p.innerText = `${item.body}`
            let div1 = document.createElement('div');
            div1.innerText = `email - ${item.email}`
            div.append(h, title, div1, p);
            wrapper.append(div);
        }
    });

