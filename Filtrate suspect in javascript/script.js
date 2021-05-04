
let criminals = [{
firstName: "Martin",
secondName: "Zelený",
birth: 1985,
licencePlate: "85C3322",
address: "U sloupů 16",
city: "České Budějovice"
}, {
firstName: "Jana",
secondName: "Růžová",
birth: 1996,
licencePlate: "93K3922",
address: "Malská 29",
city: "České Budějovice"
}, {
firstName: "Anna",
secondName: "Modrá",
birth: 1989,
licencePlate: "2EP6328",
address: "Stevardská 38",
city: "České Budějovice"
}]

let outcasts = {
    crimi:""
}

let filtrate = function (criminals,findThem){
     let found =  criminals.filter((suspect) => {
         return suspect.licencePlate.toLowerCase().includes(findThem.crimi.toLowerCase())
     })
      document.querySelector('.criminals').innerHTML = ""

    found.forEach(f => {
        let paragraph = document.createElement('p')
        paragraph.innerHTML = `Name: ${f.firstName} <br> Second Name: ${f.secondName} <br> Birth of Year: ${f.birth} <br>
Licence Plate: ${f.licencePlate} <br> Address: ${f.address}
<br> City: ${f.city}`

          document.querySelector('.criminals').appendChild(paragraph)

     })
}

let licencePlate = document.querySelector('#licence-plate')

licencePlate.addEventListener('input',(e) => {
   outcasts.crimi =  e.target.value

  filtrate(criminals,outcasts)
})