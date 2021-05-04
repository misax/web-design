// selection of object from dom

let form = document.getElementById('addForm');

let itemList = document.querySelector('#items');

let filter = document.getElementById('filter');
//Form submit event
var func = form.addEventListener('submit',(e) =>{
    
    //add item
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    
    //create new li element
    var li  = document.createElement('li');

    //add class
    li.className = 'list-group-item';
    
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    let but = document.createElement('button');

    //add classess to del button
    but.className = 'btn btn-danger btn-sm float-end delete';

    //append text node
    but.appendChild(document.createTextNode('X'));
    
    //append button to li
    li.appendChild(but);
    
    itemList.appendChild(li);

    
});

// remove item
itemList.addEventListener('click',(e) =>{
      if(e.target.classList.contains('delete')){
          if(confirm('Are you sure?')){
              let li = e.target.parentElement;
              itemList.removeChild(li);
          }
      }

});

//filter items
filter.addEventListener('click',(e) =>{
     
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    //get li
    let items = itemList.getElementsByTagName('li');
   
    //Convert to an array
    Array.from(items).forEach(e => {
         var itemName = e.firstChild.textContent;
         if(itemName.toLowerCase().indexOf(text) != -1){
            e.style.display = 'block';
         }else{
             e.style.display = 'none';
         }
           
    });

});

    