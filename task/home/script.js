// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

// a) 
    // let elementById1 = document.getElementById('content');
    // console.log(elementById1);

// b)
    // let elementById2 = document.getElementById('rules');
    // console.log(elementById2);

// c)
    // elementById1.innerText = 'fwegewrgewgwegewgwegwe';

// d)
    // elementById2.innerText = 'dsggdsgvsdvsdvsdfwfewfwe';

// e) f)
    // let allElem1 = document.getElementsByTagName('*');
    // for (const item1 of allElem1) {
    //     item1.style.backgroundColor = 'red';
    //     item1.style.color = 'white';
    // };

// g)
    // let elementById2 = document.getElementById('rules');
    // console.log(elementById2.classList);

// h)
    // let rulesFC1 = document.getElementsByClassName('fc_rules');
    // console.log(rulesFC1); 

// i)
    // let rulesFC2 = document.getElementsByClassName('fc_rules');
    // for (const item3 of rulesFC2) {
    //     item3.style.color = 'green'
    // };