

//callbacks & foreach

const ul = document.querySelector('ul');

const para = document.querySelector('p');

let people = ['mario','luigi','rzu','shaun','chun-li'];

let p = 'test';

let html= '';

const htmlDom = (people => {
    html += `<li style='color:yellow'>${people}</ul>`;
 
});

const htmlP = ()  =>{
     html = `<p style='color:black; font-size:50px'>${p}</p>`;
     html = html.toUpperCase();

     html = html.concat('aha','-','juhu');
     
    
};
let text = 'fuck off';
p = text;
htmlP(p);

para.innerHTML = html;


const logPerson = (person,index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

people.forEach((person,index) => {
    console.log('Callback func:',index,person);
});

people.forEach(function(person){
    console.log(person);
});


const myFunc = (callbackFunc) => {
     
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    console.log(value);
});

myFunc(function(value){

     value++;
     console.log(value);
});

const uls = document.querySelector('.number');

const numbers = [100,200,300,500,1000,1000];

let htmlArg = ``;

numbers.forEach(function(num){
      
    htmlArg += `'<li>${num}</li>'`;
});

uls.innerHTML = htmlArg;









const name = 'misa';

const congrats = ()=> 'heili';

let rest = congrats();
console.log(rest);

let res2 = name.toUpperCase();

console.log(res2);





//declaration function
function greet(){
    console.log('hello there');
}

//function expression
const speak = function(){
   console.log('good day !');
};

const calcReg = radius => 3.14 * radius **2;

const aim = calcReg(3);
console.log('Area is:',aim);

const speak1 = function(name){
   console.log(`good day ! ${name}`);
};

speak1('Misa');

const calcArea = function (radius){
    let area = 3.14 * radius **2;
    return area;
}

var res = calcArea(2);
console.log('Area:',res);

const bill = (products,tax) => {
    let total = 0;
    for(let i = 0;i<products.lenght;i++){
        total += products[i] + products[i] *tax;
    }
    return total;
};


// const bill = function(products,tax){
//     let total = 0;
//     for(let i = 0;i < products.lenght;i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

console.log(bill([10,15,30],0.2));