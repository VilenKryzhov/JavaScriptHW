fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(value => value.json())
.then(value => {
    for (let valueElement of value) {
        let value = document.createElement('div');
        value.innerText = `${valueElement.title}`
        let link1 = document.createElement('a');
        link1.href = 'details1.html?data=' + JSON.stringify(valueElement)
        link1.innerText = '      link'
        value.append(link1);
        document.body.append(value);

    }
})