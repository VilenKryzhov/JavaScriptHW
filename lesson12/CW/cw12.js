// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let wrapper = document.getElementsByClassName('wrapper')[0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        console.log(value)
        for (let item of value) {
            let div = document.createElement('div');
            div.classList.add('head')
            let h = document.createElement('h');
            h.innerText = `user iD - ${item.userId}; ID - ${item.id}`
            let title = document.createElement('div');
            title.innerText = `${item.title}`;
            let p = document.createElement('p');
            p.innerText = `${item.body}`
            wrapper.append(div);
            let btn = document.createElement('button');
            btn.innerText = 'SEND';
            div.append(h, title, p, btn);
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        let com = document.createElement('div');
                        for (let valueElement of value) {
                            let comment = document.createElement('div');
                            comment.innerText = `${valueElement.body}`
                            comment.style.background = 'blue';
                            com.append(comment);
                        }
                        div.append(com);
                    })
            }
        }
    })

let info = function () {
    document.body.addEventListener("click", function (e) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = `Назва тегу - ${e.target.localName} Список класів${e.target.classList} Список ID -${e.target.id} Розмір - ${e.target.offsetWidth} X ${e.target.offsetHeight}`;
        div.append(p);
        document.body.append(div);

    })
}
info()
