const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput=document.querySelector("[data-search]")
const selectCard = document.querySelector("[data-card]")
const button = document.querySelector("[button]")

//const btn = document.getElementById('btn-select');
let contactInfo="";
let users=[];

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
      users.forEach(user => {
        const isVisible = 
        user.name.toLowerCase().includes(value); 
        
        user.element.classList.toggle("hide", !isVisible);
        
          if(value === ""){
            hideContacts();
          }else{
            showContacts();
          }
       });
    })
 
//pull in json data via url 
//   fetch("https://jsonplaceholder.typicode.com/users")
  
fetch('./contactsFinal.json') //this loads black boxes
.then(res=>res.json())
.then(data =>  {
    users = data.map(user=>{
    //take all users and hide the ones that don't match what we typed in
    //these are inside the card
    
        const card = userCardTemplate.content.cloneNode(true).children[0];  //clone this content and all content indisd, returns a doc fracgemant
        const header = card.querySelector("[data-header]")//name
        const address = card.querySelector("[data-address]")
        const ville = card.querySelector("[data-ville]")
        const region = card.querySelector("[data-region]")
        const codePostal = card.querySelector("[data-codePostal]")
        const tel = card.querySelector("[data-tel]")
        const body = card.querySelector("[data-body]")//email box
       
        //const button = button.querySelector("[data-button]");
       
        //now can do this
        header.textContent = user.Name+'<br>';
        address.textContent= user.Addresse+'<br>'
        ville.textContent = user.Ville+', '
        region.textContent = user.Region+', '
        codePostal.textContent=user.CodePostal+'<br>'
        tel.textContent = user.Tel+'<br>'
        body.textContent = user.Email
       
        
        //so we want a header and the body from our card->go back to html file and add attributes
         
        //creates doc fragment. get 1st child to use it 
        

        userCardContainer.append(card); 
          
          

        return contactInfo = 
        {name :user.Name, 
        Addresse: user.Addresse,
        Ville: user.Ville,
        Region: user.Region,
        CodePostal: user.codePostal,
        Tel: user.Phone, 
        Email: user.Email, 
        element : card}
    
    })
   
   
}) //end of user.map
let isSelected=false;
  
 function getContacts (button){

    //document.getElementById('btn-card').innerHTML = "";
    //document.getElementById('user-cards').textContent;
    let coordinates = button.parentNode.textContent;
    // document.getElementById('test').innerHTML = coordinates.Email;
    document.getElementById('test').innerHTML = coordinates;
    
 }

 /*  var tcopy = document.querySelectorAll(".copy");
  //let copied = $(".copy:visible");
  for(copied of tcopy)
  copied.onclick = function() { 
    document.execCommand("copy"); 
  };  
  copied.addEventListener("copy", function(event) { 
    event.preventDefault(); 
    if(event.clipboardData) { 
      event.clipboardData.setData("text/plain", copied.textContent);
      //console.log(event.clipboardData.getData("text"))
      let result = event.clipboardData.getData("text");
      document.getElementById('test').innerHTML = 'test' + result;
    };
  });
  
  ================================checks================
   let checks = document.querySelectorAll(".check");
   checks.forEach(el=>{
   if(isSelected === true){
    alert(isSelected);
    document.getElementById('test').innerHTML = "hello";
  
  
  }
})
}
  */
 function hideContacts(){

  let contacts = document.getElementById('user-cards');
  contacts.style.display = "none";
  
 }
 function showContacts(){

  contacts = document.getElementById('user-cards');
  contacts.style.display = "block";
  
 }

        
   // testCheck(card);
        //function displayCard(card){
         
           //let selectedCard = document.querySelector('.card');
         
       //function displayCard(card){
         
          //  let mycards = document.getElementsByClassName('card');
          //  let attr = "card";
          //  for(i=0; i <mycards.length; i++){
          //  mycards[i].setAttribute('class', 'card');
                            
          //  }    