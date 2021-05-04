
//BOOK Class

class Book{
    constructor(title,author,isbn){
          this.title = title;
          this.author = author;
          this.isbn = isbn;
    } 
}

//UI Class:Handle UI Tasks
class UI{
      displayBooks(){
        let StoredBooks = [
            {
            title:'Book one',
            author:'John Doe',
            isbn:'3265445'
        },
        {
              title:'Book two',
            author:'Jane Doe',
            isbn:'56987410'
        },
               {
            title:'Book three',
            author:'John Doe',
            isbn:'3265445'
        },
        {
              title:'Book four',
            author:'Jane Doe',
            isbn:'56987410'
        }
    ];
     
    
     StoredBooks.forEach((book) => addBookToList(book) );

  } 

} 

// func for Add list of books
function addBookToList(book){
     let list = document.querySelector('#book-list');

     let row = document.createElement('tr');

     row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
     
     `;

     list.appendChild(row);
 }
 //Create new object
let ui = new UI();
let displayBooks = ui.displayBooks();

  //func clear fields
 function clearFields(){
      document.querySelector('#title').value = '';
       document.querySelector('#author').value ='';
       document.querySelector('#isbn').value ='';
 }

 //delete book from list
 function deleteBook(book){
    
    if(book.classList.contains('delete')){
        book.parentElement.parentElement.remove();
    }
 }

//Alert message
function showAlert(message,className){
     let div = document.createElement('div');
     div.className = `alert alert-${className}`;
     div.appendChild(document.createTextNode(message));
     let container = document.querySelector('#container');
     let form = document.querySelector('#book-form');
     container.insertBefore(div,form);

     //vanish in 3 sec
     setTimeout(() => document.querySelector('.alert').remove(),3000);
 }




//Event display books
 document.addEventListener("DOMContentLoaded",displayBooks);

 //Add book
 document.querySelector('#book-form').addEventListener('submit',(e) =>{
   
         //Prevent actual submit
         e.preventDefault();
         //Get values
         let title= document.querySelector('#title').value;
         let author = document.querySelector('#author').value;
         let isbn = document.querySelector('#isbn').value;

         if(title === '' || author==='' || isbn === ''){
             showAlert('Please fill in all  required fields!!!','danger');
         }else{
        //Instantiate  book
         let book = new Book(title,author,isbn);
         

         //Add book to UI
        addBookToList(book);

        //Clear 
         clearFields();
         }

        
 });


 //event remove a book

 document.querySelector('#book-list').addEventListener('click',(e) =>{
    
    deleteBook(e.target);

 });
 