//На странице post-details.html:
//7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
//8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let postWrapper = document.getElementsByClassName('postWrapper')[0];
let infoPost = localStorage.getItem('objPost');
let postDetails = JSON.parse(infoPost);
console.log(postDetails);
for (let postDetail of postDetails) {
    console.log(postDetail)
    let wrapHead = document.createElement('div');
    wrapHead.classList.add('wrapHead')
    let userID = document.createElement('h3');
    userID.innerText = `user ID - ${postDetail.userId}`
    let ID = document.createElement('h3');
    ID.innerText = `ID - ${postDetail.id}`
    let title = document.createElement('div');
    title.innerText = `${postDetail.title}`;
    let body = document.createElement('p');
    body.innerText = `${postDetail.body}`
    let btn = document.createElement('btn');
    btn.innerText = 'Comments'
    btn.classList.add('btn')
    wrapHead.append(userID,ID,title,body,btn)
    postWrapper.append(wrapHead);
    btn.onclick=()=>{
    fetch(`https:jsonplaceholder.typicode.com/posts/${postDetail.id}/comments`)
        .then(value => value.json())
        .then(value => {
            console.log(value)
                let generalWrapper = document.createElement('div');
                generalWrapper.classList.add('generalWrapper')
            for (let comment of value) {
                console.log(comment)
                let wrapper = document.createElement('div');
                wrapper.classList.add('wrapperDiv')
                wrapper.classList.add('wrapperDown');

                let id = document.createElement('div');
                id.innerText = `ID - ${comment.id}`;
                id.classList.add('wrapperDown');
                let name = document.createElement('div');
                name.innerText = `Name - ${comment.name}`;
                name.classList.add('wrapperDown');
                let email = document.createElement('div');
                email.innerText = `Email - ${comment.email}`;
                email.classList.add('wrapperDown');
                let body = document.createElement('div');
                body.innerText = `${comment.body}`;
                body.classList.add('wrapperDown');
                wrapper.append(id,name,email,body);
                generalWrapper.append(wrapper)


            }
        })


    }
}
//post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
//Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

