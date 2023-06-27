//На странице user-details.html:
//4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
//5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
//(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
let wrapperDetails = document.getElementsByClassName('wrapperDetails')[0];
let userTake = localStorage.getItem('obj');
let user = JSON.parse(userTake);
console.log(typeof user);
console.log(user)
for (let item of user) {
    let head = document.createElement('h3');
    head.innerText = `${item.name}`;
    head.classList.add('head')

    let btn = document.createElement('button');
    btn.innerText = 'post of current user';
    btn.classList.add('btn')
    head.append(btn);

    let wrapDiv = document.createElement('div');
    wrapDiv.classList.add('wrap')

    let username = document.createElement('div');
    username.innerText = `username: ${item.username}`;
    username.classList.add('divWrap');

    let email = document.createElement('div');
    email.innerText = `email: ${item.email}`;
    email.classList.add('divWrap');

    let adressStreet = document.createElement('div');
    adressStreet.innerText = `street: ${item.address.street}`;
    adressStreet.classList.add('divWrap');

    let adressSuite = document.createElement('div');
    adressSuite.innerText = `suite: ${item.address.suite}`;
    adressSuite.classList.add('divWrap');

    let adressCity = document.createElement('div');
    adressCity.innerText = `city: ${item.address.city}`;
    adressCity.classList.add('divWrap');

    let geoZipcode = document.createElement('div');
    geoZipcode.innerText = `zipcode: ${item.address.zipcode}`;
    geoZipcode.classList.add('divWrap');

    let geoLat = document.createElement('div');
    geoLat.innerText = `lat: ${item.address.geo.lat}`;
    geoLat.classList.add('divWrap');

    let geoLng = document.createElement('div');
    geoLng.innerText = `lng: ${item.address.geo.lng}`
    geoLng.classList.add('divWrap');

    let phone = document.createElement('a');
    phone.innerText = `phone: ${item.phone}`
    phone.classList.add('divWrap');

    let website = document.createElement('div')
    website.innerText = `our website: ${item.website}`;
    website.classList.add('divWrap');

    let infoCompany = document.createElement('div')
    infoCompany.innerText = `    company: ${item.company.name}`
    infoCompany.classList.add('divWrap');

    let infoCatchPhrase = document.createElement('div');
    infoCatchPhrase.innerText = `catch phrase: ${item.company.catchPhrase}`;
    infoCatchPhrase.classList.add('divWrap');

    let infoBs = document.createElement('div');
    infoBs.innerText = `bs - ${item.company.bs}`;
    infoBs.classList.add('divWrap');


    btn.onclick = () => {
        fetch(`https:jsonplaceholder.typicode.com/users/${item.id}/posts`)
            .then(value => value.json())
            .then(value => {
                let divWrapperTittle = document.createElement('div');
                divWrapperTittle.classList.add('divWrapperTitle')
                for (let valueElement of value) {
                    let divTitle = document.createElement('div');
                    divTitle.innerText = `${valueElement.title}`
                    divTitle.classList.add('divTitleWrap');
                    let link = document.createElement('a');
                    link.innerText = 'all information';
                    link.href = 'post-details.html'
                    divTitle.append(link);
                    divWrapperTittle.append(divTitle)
                    wrapDiv.append(divWrapperTittle);


                    link.onclick = () => {
                        let postArr = [];
                        postArr.push(valueElement);
                        localStorage.setItem('objPost', JSON.stringify(postArr))
                    }
                }
            })
    }
    wrapDiv.append(username, email, adressStreet, adressSuite, adressCity, geoZipcode, geoLat, geoLng, phone, website, infoCompany, infoCatchPhrase, infoCatchPhrase)
    wrapperDetails.append(head, wrapDiv);

}

//user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
//блоки с краткой информацией про post - в ряд по 5 объектов.


//5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера//
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.