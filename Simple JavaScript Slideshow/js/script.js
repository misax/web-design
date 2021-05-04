
let init = 0;
const images = ['img/image1.jpg','img/image2.jpg','img/image3.jpg','img/image4.jpg'];
const time = 2000;

const slide = document.querySelector('#slide');

function changeImg(){
    slide.src = images[init];

    if(init < images.length -1){
        init++;
    }else{
        init = 0;
    }
    setTimeout('changeImg()', time);
        
};

window.addEventListener('onload',changeImg());






