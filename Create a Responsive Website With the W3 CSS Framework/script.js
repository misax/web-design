 const btnOne = document.querySelector('#btn-1');
      const btnTwo = document.querySelector('#btn-2')
      const btnThree = document.querySelector('#btn-3')
 
      btnOne.addEventListener('click',() =>{
           const what = document.getElementById('what');
            if (what.className.indexOf("w3-show") == -1) {
                what.className += " w3-show";
            } else {
                what.className = what.className.replace(" w3-show", "");
            }
     });

       btnTwo.addEventListener('click',() =>{
             const who = document.getElementById('who');
            if (who.className.indexOf("w3-show") == -1) {
                who.className += " w3-show";
            } else {
                who.className = who.className.replace(" w3-show", "");
            }
     });

        btnThree.addEventListener('click',() =>{
             const where = document.getElementById('where');
            if (where.className.indexOf("w3-show") == -1) {
                where.className += " w3-show";
            } else {
                where.className = where.className.replace(" w3-show", "");
            }
     });