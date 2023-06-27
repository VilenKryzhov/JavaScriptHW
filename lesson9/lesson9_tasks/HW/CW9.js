//- є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
//Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//for (let simpson of simpsons) {
//   let div = document.createElement('div');
//   div.classList.add('member');
//    document.body.appendChild(div);
//    let h1 = document.createElement('h1');
//   h1.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`;
//    let p = document.createElement('p');
//    p.innerText = `${simpson.info}`;
//   let img = document.createElement('img');
//   img.src = `${simpson.photo}`;
//    div.append(h1, p, img);


//   }
//}

//- взяти попередній масив з сімпсонами.
//    Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
//for (let simpson of simpsons) {
//   let div = document.createElement('div');
//   div.classList.add('member');
//   document.body.appendChild(div);
//   let h1 = document.createElement('h1');
//   h1.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`;
//   let p = document.createElement('p');
//   p.innerText = `${simpson.info}`;
//   let img = document.createElement('img');
//   img.src = `${simpson.photo}`;
//   div.append(h1, p, img);
//}

//- Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
for (let item of coursesArray) {

    let divWrapper = document.createElement('div');
    let divWrapper2 = document.createElement('div');
    let liWrapper = document.createElement('ul');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h2Second = document.createElement('h2');

    for (let item1 of item.modules) {
        let li = document.createElement('li')
        li.innerText = `${item1}`;
        liWrapper.appendChild(li);
        li.style.border = '2px solid blue';
        li.style.padding = '8px';
        li.style.marginTop = '5px';
        li.style.listStyle = 'none';
    }

    h1.innerText = `${item.title}`;
    h2.innerText = ` Кількість місяців навчанна : ${item.monthDuration} `;
    h2Second.innerText = `Кількість годин навчання : ${item.hourDuration}`;


    document.body.appendChild(divWrapper);
    divWrapper2.append(h2, h2Second);
    divWrapper.append(h1, divWrapper2, liWrapper);


    divWrapper.style.border = '2px solid red';
    divWrapper.style.marginTop = '20px'
    divWrapper.style.padding = '10px'
    liWrapper.style.border = '2px solid blue';
    liWrapper.style.marginTop = '20px'
    liWrapper.style.padding = '10px'



    h1.style.border = '2px solid blue';
    h1.style.padding = '8px';
    h1.style.display = 'flex';
    h1.style.justifyContent = ' center';

    h2.style.border = '2px solid blue';
    h2.style.padding = '8px';
    h2.style.width = '40%';
    h2.style.display = 'flex';
    h2.style.justifyContent = ' center';

    h2Second.style.border = '2px solid blue';
    h2Second.style.padding = '8px';
    h2Second.style.display = 'flex';
    h2Second.style.justifyContent = ' center';
    h2Second.style.width = ' 60%';
    divWrapper2.style.display = 'flex';
    divWrapper2.style.columnGap = '10px';


}
