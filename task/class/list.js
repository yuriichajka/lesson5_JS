const listDiv = document.getElementById('list');
const key = 'key';
let store = JSON.parse(localStorage.getItem(key)) || [];

const showList = () => {
    if (!store.length) {
        const empty = document.createElement('h3');
        empty.innerText = 'List is empty';
        listDiv.appendChild(empty)
    }

    let buttonAll = document.createElement('button');
    for (let item of store) {
        const itemDiv = document.createElement('div');
        const imgE = document.createElement('img');
        const nameE = document.createElement('div');
        const numberE = document.createElement('div');
        const priceE = document.createElement('div');
        const button = document.createElement('button');
        imgE.src = item.img;
        nameE.innerText = `Name: ${item.name}`;
        priceE.innerText = `Price: ${item.price}`;
        numberE.innerText = `Number: ${item.number}`;
        button.innerText = 'DELEte';
        buttonAll.innerText = 'deleTE All';
        button.onclick = () => {
            delete(item.id)
        }
        
        itemDiv.append(imgE, nameE, numberE, priceE, button)
        listDiv.appendChild(itemDiv);
    }

    buttonAll.onclick = () => {
        deleteAll()
    }

    listDiv.appendChild(buttonAll)
}

    const deleteItem = (id) => {
        store = store.filter(value => value.id != id)
        localStorage.setItem(key, JSON.stringify(store))
        listDiv.innerHTML = '';
        showList();
    }

    const deleteAll = () => {
        localStorage.clear();
        showList();
        listDiv.innerHTML = 'List is empty';
    }

    showList();