// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let wrapper = document.getElementsByClassName('wrapper')[0];
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (let item of value) {
            let divItem = document.createElement('div');
            divItem.innerText = `${item.id} ${item.name} ${item.username} ${item.email} ${item.address}`
            let btnItem = document.createElement('button');
            btnItem.innerText = 'Look all posts';
            divItem.classList.add('onOF')
            divItem.append(btnItem);
            wrapper.append(divItem);
            btnItem.onclick = function () {
                let divPosts = document.createElement('div');
                fetch(`https://jsonplaceholder.typicode.com/posts/`)
                    .then(value => value.json())
                    .then(value => {
                        for (let itemPosts of value) {
                            if (item.id === itemPosts.id) {
                                let h = document.createElement('h1');
                                h.innerText = ` userId - ${itemPosts.userId} ID - ${itemPosts.id}`
                                let h1 = document.createElement('h2')
                                h1.innerText = `${itemPosts.title}`
                                let p = document.createElement('p');
                                p.innerText = `${itemPosts.body}`
                                let divItemPosts = document.createElement('div');
                                let btnPost = document.createElement('button');
                                btnPost.innerText = 'Look new coments'
                                h.append(btnPost);
                                divItemPosts.append(h, h1, p);
                                divPosts.append(divItemPosts);
                                btnPost.onclick = function () {
                                    let divComments = document.createElement('div');
                                    fetch(`https://jsonplaceholder.typicode.com/comments`)
                                        .then(value => value.json())
                                        .then(value => {
                                            for (const itemComments of value) {
                                                if (itemComments.id === itemPosts.id){
                                                let h = document.createElement('h');
                                                h.innerText = `${itemComments.id}`
                                                let h4 = document.createElement('h4');
                                                h4.innerText = `${itemComments.name}`
                                                let p2 = document.createElement('p2');
                                                p2.innerText = `${itemComments.email}`;
                                                let p = document.createElement('p');
                                                p.innerText = `${itemComments.body}`;
                                                divComments.append(h, h4, p2, p)
                                            }
                                        }})
                                    wrapper.append(divComments);
                                }
                            }
                        }
                    })
                wrapper.append(divPosts);

            }
        }

    })

