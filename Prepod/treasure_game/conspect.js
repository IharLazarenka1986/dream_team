// DOM


// Document Object Model
// Объектная модель документа

// const elem1 = document.children[0].children[1].children[0].children[0].parentElement.parentElement.parentElement;

// const elem2 = document.children[0].children[1].children[0];

// console.log(elem1);



// const elem = document.body.children[0].children[2];

// console.dir( elem.previousElementSibling.previousElementSibling.previousElementSibling );
// console.dir(elem.nextElementSibling);

// children - идем вниз
// parentElement - идем вверх
// previousElementSibling - идем влево
// nextElementSibling - идем вправо

// const list = document.getElementById('list');
// const elems = list.getElementsByClassName('test');
// const elems2 = document.getElementsByClassName('test');


// const elems = document.querySelectorAll('li.test');

// const elemsArray = [...elems];

// console.log(elemsArray);

// setTimeout(() => {
//     elemsArray.forEach((li) => {
//         // li.remove(); // удаляем элемент
//         // li.textContent = 'THIS IS TEXT FROM JS!!!';
//         // console.log(li.textContent);
//     });
// }, 1500);


// const monogoLi = document.querySelectorAll('li');

// const monogoLiArr = [...monogoLi];

// monogoLiArr.forEach((li) => {
//     li.addEventListener('click', () => {
//         li.classList.toggle('active');
//     });
// })

// console.log(monogoLiArr);

// const ul = document.querySelectorAll('ul');

// console.log(ul[0]);


// ul.addEventListener('click', () => {
//     ul.style.backgroundColor = 'orange';
// });




