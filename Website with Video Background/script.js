
const toggle = document.querySelector('.toggle')

const showcase = document.querySelector('.showcase')

showcase.addEventListener('click',() => {
   
    if(!toggle.className.includes('active')){
           
              toggle.classList.add('active')
              showcase.classList.add('active')
                 console.log(toggle)
                 console.log(showcase)
    }else{
        showcase.classList.remove('active')
         toggle.classList.remove('active') 
         console.log(toggle)
         console.log(showcase)
         
    
    }
})

showcase.addEventListener('click',() => {
      if(toggle.classList === 'active' && showcase.classList === 'active'){
       
         
    }
})



