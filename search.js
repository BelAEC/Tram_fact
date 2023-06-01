const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput=document.querySelector("[data-search]")
const selectCard = document.querySelector("[data-card]")


//const btn = document.getElementById('btn-select');
let contactInfo="";
let users=[];


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
      user.name.toLowerCase().includes(value)
    //   ||user.Email.toLowerCase().includes(value);
        
      user.element.classList.toggle("hide", !isVisible)
    })

  })

//pull in json data via url 
//   fetch("https://jsonplaceholder.typicode.com/users")
  
fetch('./contacts.json') //this loads black boxes
.then(res=>res.json())
.then(data =>  {
    users = data.map(user=>{
    //take all users and hide the ones that don't match what we typed in
    
        const card = userCardTemplate.content.cloneNode(true).children[0];  //clone this content and all content indisd, returns a doc fracgemant
        const header = card.querySelector("[data-header]")
        const address = card.querySelector("[data-address]")
        const ville = card.querySelector("[data-ville]")
        const region = card.querySelector("[data-region]")
        const tel = card.querySelector("[data-tel]")
        const body = card.querySelector("[data-body]")
        const checkbox = card.querySelector("[data-checkbox]");
        //now can do this
        header.textContent = user.Name;
        address.textContent=user.Addresse;
        ville.textContent= user.Ville;
        region.textContent= user.Region;
        tel.textContent=user.Phone;
        body.textContent = user.Email;
        
        //so we want a header and the body from our card->go back to html file and add attributes
         
        //creates doc fragment. get 1st child to use it 
        
        userCardContainer.append(card); 

        //function displayCard(card){
         
           let mycards = document.getElementsByClassName('card');
           let attr = "card";
           for(i=0; i <mycards.length; i++){
           mycards[i].setAttribute('class', 'card');
                            
           }      
          
            

       return contactInfo = {name :user.Name, 
        email: user.Email, 
        Addresse: user.Addresse,
        Ville: user.Ville,
        Region: user.Region,
        Tel: user.Phone, 
        element : card}

    })
   
}) //end of user.map
let isSelected=false;

function addSelect(){
  let mycards =  document.querySelectorAll('.card');
  mycards.forEach(el=>{el.append('')

  })
};

function testCheck(){
 
  let checks = document.querySelectorAll(".check");
   checks.forEach(el=>{
   if(isSelected === true){
    alert(isSelected);
    document.getElementById('test').innerHTML = "hello";
  
  //contactsSelected(isSelected);
  }
})
}
//contactsSelected(isSelected);
                   
function contactsSelected(isSelected) {
  
  let mycards =  document.querySelectorAll('.card');
  
  for(card in mycards){
    if(isSelected){
      
    document.getElementById('test').innerHTML = "hello" + card.textContent;
  }
}}
       
        
    