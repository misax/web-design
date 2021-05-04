

 document.querySelector('.toggle').addEventListener('click',()=>{
const nav =  document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');


    if(toggle.classList.toggle('active')){
         toggle.classList.add('active');
         nav.classList.add('active');
         
    }
    else{
        nav.classList.remove('active');
        toggle.classList.remove('active');
         
    }
     
 }); 


 document.querySelector('').innerHTML  = `<h2>${nav}</h2>`
        
 

      
