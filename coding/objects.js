
let user = {
    name:'misa',
    age:44,
    email:'mordoktest@gmail.com',
    location:'czech',
    blogs:['testing array','another testing on my website'],
    login:function(){
          let doc =  document.querySelector('h1');
          doc.style.fontSize = '100px';
          doc.style.color = 'green';
          doc.innerHTML = 'You are being logged into this method.';
    },
    logout:function(){
          let doc =  document.querySelector('h2');
            doc.style.fontSize = '50px';
          doc.style.color = 'red';
          doc.innerHTML = 'You are being logged out from this method.';
    },
    doNothing:function(name){
       this.name = name;
       let doc =  document.querySelector('h1');
       doc.style.color = 'red';
       doc.style.border  ='2px solid green';
       doc.style.width = '200px';
       getComputedStyle(doc);
      var computed =  getComputedStyle(doc);
       console.log( computed.border);
       doc.textContent = name;
       
    }



};

user.login();
user.logout();


console.log(typeof(user));