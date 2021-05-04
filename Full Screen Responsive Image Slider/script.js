
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    //current class
    const current = document.querySelector('.current');
    
    //remove current class
    current.classList.remove('current');
    
    //check for next slide
    if(current.nextElementSibling){
        //add current to next sibling element
      current.nextElementSibling.classList.add('current');
    }else{
       //add current to start
       slides[0].classList.add('current');
    }
    //some delay
    setTimeout(() => current.classList.remove('current'));

}

const prevSlide = () => {
    //current class
    const current = document.querySelector('.current');
    
    //remove current class
    current.classList.remove('current');
    
    //check for previous slide
    if(current.previousElementSibling){
        //add current to previous sibling element
      current.previousElementSibling.classList.add('current');
    }else{
       //add current to last
       slides[slides.length -1].classList.add('current');
    }
   // some delay
    setTimeout(() => current.classList.remove('current'));

}

//events

next.addEventListener('click',(e)=> {
   nextSlide();
   if(auto){
       clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide, intervalTime);
   }
})

prev.addEventListener('click',(e)=> {
    prevSlide();
      if(auto){
       clearInterval(slideInterval);
       slideInterval = setInterval(nextSlide, intervalTime);
   }
})

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}