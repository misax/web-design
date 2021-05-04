

(function onClick(e,func){
  e = 10;
  console.log("Button was being clicked:",e);

   func = function(){
    console.log("this is main func");
  }
  func();
})();

//var  button = document.getElementById('button').addEventListener('click',(event) =>{

      // console.log(event.target);
      //  console.log(event.target.id);
      //   console.log(event.target.className);
      //    console.log(event.target.classList);

      //    let output= document.getElementById('output');
      //    output.innerHTML = '<h3>'+ event.target.id +'</h3>';

      //    console.log(event.type);
      //    console.log(event.clientX);

      //        console.log(event.offsetX);
      //    console.log(event.clientY);
      //    console.log(event.offsetY);
          //  console.log(event.altKey);
          //   console.log(event.ctrlKey);
          //    console.log(event.shiftKey);

          //    if(event.shiftKey){
          //      console.log("You are in!");
          //    }
          //    else{
          //      console.log('Please enter shift key');
          //    }

//});

let  button = document.getElementById('button');
let box = document.getElementById('box');
let select = document.querySelector('select');
let form = document.querySelector('form');
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

//box.addEventListener('mousemove',runEvent);

//var itemInput = document.querySelector('input[type="text"');

//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('focus',runEvent);

select.addEventListener('change',(e) =>{
      console.log(e.type);
});

select.addEventListener('input',(e) =>{
      console.log(e.type);
});

form.addEventListener('submit',(e) =>{
     e.preventDefault();
     console.log('hoho');
});

 function runEvent(e){
console.log("lolo");
    



  // console.log(e.type);
  // console.log(e.target.value);

  // document.getElementById('output').innerHTML = '<h3>'+ e.target.value +'</h3>';

  //output.innerHTML = '<h3>MouseX:' + e.offsetX + ' </h3><h3>MouseY:' + e.offsetY + ' </h3>' ;

 // document.body.style.backgroundColor = "rgb("+e.offsetX +","+e.offsetY+",40)";
}
