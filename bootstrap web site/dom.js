
//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);

// var headerText = document.getElementById('header-title');
// var mainHeader  = document.getElementById('main-header');
// headerText.innerText = '78';
// headerText.textContent = 'm';
// headerText.innerHTML = 'ucho';

// headerText.style.color  = '#fff000';
// mainHeader.style.borderBottom = '3px solid #000';


// var items = document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor = 'black';
// items[2].style.color = '#fff';

// for(var i = 0;i<items.length;i++){
//     items[i].style.backgroundColor = 'black';
//     items[i].style.color = '#fff';
//     items[i].style.border = '1px solid #fff'
// }

// let input = document.querySelector('input');
// input.value = 'hello';

// let submit = document.querySelector('input[type="submit"]');

// submit.value = 'send';

// let item = document.querySelectorAll('.list-group-item');

// item.forEach(val =>{
//     val.style.color = 'green';
    
// });

// let lastChild = document.querySelector('.list-group-item:last-child');
// lastChild.style.color='blue';

// let nthChild = document.querySelector('.list-group-item:nth-child(2)');
// nthChild.style.color='blue';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');


// odd.forEach(od => {
//      od.style.backgroundColor = '#f4f4f4';
     
// });

// even.forEach(e => {
//      e.style.backgroundColor = '#ccc';
     
// });

// //Traversing The dom

// //choose parent of the child 
// var itemList = document.querySelector('#items');

// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'purple';
// console.log(itemList.parentNode.parentNode.parentNode);


// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'purple';
// console.log(itemList.parentElement.parentElement);

// //childNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1].style.color);
// itemList.children[1].style.color = "grey"

// //FirstChild

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// //LastChild

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);