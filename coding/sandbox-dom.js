

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.misa.com');
link.innerHTML = 'press this link...';

const p = document.querySelector('P');

console.log(p.getAttribute('class'));
p.setAttribute('class','success');








// var div = document.querySelector('div');

// div.innerText = "456 ";
// div.innerHTML += '1236';

// var div = document.querySelectorAll('div');

// div.forEach(element => {
//     console.log(element.innerHTML);
//     element.innerText +=' new text';
// });

//const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML += `<h2>This is a new h2.</h2>`;


// const people = ['mario','huhu','lolo'];
// people.forEach(p => {
//     content.innerHTML += `<p>${p}</p>`;
// });