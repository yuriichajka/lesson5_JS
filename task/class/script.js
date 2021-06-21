// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)


// // a) 
//     let change = document.getElementById('main_header')
//     change.style.color = 'red'
//     change.innerText = 'Monday, year - 2021';
// // b)
//     let elemLi = document.getElementsByTagName('ul')
//     for(const item of elemLi) {
//         item.style.width = '400px';
//     }
// // c)
//     let elemWidth = document.getElementsByClassName('linkList') 
//     for (const item2 of elemWidth) {
//         item2.style.width = '50%';
//     }
// // d)
//     let txt = document.getElementsByClassName('listElement2')
//     for (const item3 of txt) {
//         let qqq = item3.innerText    
//         console.log(qqq);
//     }
    
// // e)
//     let colorLi = document.getElementsByTagName('li')
//     for (const item4 of colorLi) {
//         item4.style.backgroundColor = 'grey'
//     }
// // f)
//     let plusClass = document.getElementsByTagName('a')
//     for (const item5 of plusClass) {
//         item5.classList.add('anchor')
//     }
// g)
    // let changeSize = document.getElementsByTagName('a')
    // for (const item6 of changeSize) {
    //         if (item6.innerText === 'link3') {
    //            item6.style.fontSize = '40px'   
    //         }
    // }
// h)
    // let changeClass = document.getElementsByTagName('a')
    // for (const item of changeClass) {
    //     let xxx = item.innerText
    //     item.classList.add('element_' + item.innerText);
    // }
// i)
    // result = prompt('Your color', ['white'])
    // let changeColor = document.getElementsByClassName('sub-header')
    // for (const item of changeColor) {
    //     item.style.backgroundColor = result
    // }
// j)
    // result = prompt('Your color', ['white'])
    // let changeColor = document.getElementsByClassName('sub-header')
    // for (item of changeColor) {
    //     if (item.innerText === 'content 2 segment') {
    //         item.style.color = result
    //     }
    // }
// k)
//     result = prompt('Your text', ['abcde'])
//     let changeColor = document.getElementsByClassName('text_segment');
//     for(const item of changeColor)  {  
//         item.innerText = result;
//  }
// i)
    // let changePadd = document.getElementsByTagName('p')
    // for (const item of changePadd) {
    //     item.style.padding = '20px'
    // }
// m)
    // let changeTxt = document.getElementsByClassName('text2')
    // for (const item of changeTxt) {
    //     item.innerText = 'monday 2021';
    // }


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div


// let f1 = document.forms.f1;
// let nameInput = f1.name;

// f1.addEventListener('submit', (event) => {
//     let name = nameInput.value;
//     let user = name
//     let jsonUser = JSON.stringify(user);
//     localStorage.setItem('user', jsonUser);
// });


// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
    
    
    const {name, number, price, img} = document.forms.form;
    const btn = document.getElementById('btn');
    const key = 'key';

    const save = (name, number, price, img) => {
        const store = JSON.parse(localStorage.getItem(key)) || [];

        store.push({id: Math.random(), name, number, price, img})
        localStorage.setItem(key, JSON.stringify(store))
    }
    
    btn.onclick = () => {
        save(name.value, number.value, price.value, img.value);
    }
