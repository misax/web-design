
const slides = document.querySelectorAll('.slide');

(function slidesFunc(){
        slides.forEach((slide)=>{
           slide.addEventListener('click',() =>{

            //active erase all
            deleteActiveClass();

            slide.classList.add('active');
        })
    })
})();

 

function deleteActiveClass(){
    slides.forEach((slide) => {
           slide.classList.remove('active');
    });
}