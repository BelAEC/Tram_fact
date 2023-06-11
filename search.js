const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput=document.querySelector("[data-search]")
const selectCard = document.querySelector("[data-card]")
const copyCard = document.querySelector("[data-copy]")
const button = document.querySelector("[button]")


//const btn = document.getElementById('btn-select');
let contactInfo="";
let users=[];



searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
      user.name.toLowerCase().includes(value); 
      
      user.element.classList.toggle("hide", !isVisible)
             
      
      if(value === ""){
        hideContacts();
      }else{
        showContacts();
      
    
       
    //   ||user.Email.toLowerCase().includes(value);
       
      }   
    })

  })

  // searchInput.addEventListener("input", e=>{
  
  // })
  // function resetSearch(){
  //     let form=document.getElementById('searchForm');
  //   form.reset();
  // }
  
  // var copy = document.querySelectorAll(".copy");
          // let toCopy = $(".copy:visible"); 
       
          //  toCopy.onclick = function() { 
          //    document.execCommand("copy"); 
           
          //    toCopy.addEventListener("copy", function(event) { 
          //    event.preventDefault(); 
             
          //    if (event.clipboardData) { 
          //     event.clipboardData.setData("text/plain", toCopy.textContent);
          //     //console.log(event.clipboardData.getData("text"))
          //     let result = event.clipboardData.getData("text");
          //     document.getElementById('test').innerHTML = "<br>\n"+result.textContent;
          //     }
          //   })
          // }
   
//pull in json data via url 
//   fetch("https://jsonplaceholder.typicode.com/users")
  
fetch('./contactsFinal.json') //this loads black boxes
.then(res=>res.json())
.then(data =>  {
    users = data.map(user=>{
    //take all users and hide the ones that don't match what we typed in
    //these are inside the card
    
        const card = userCardTemplate.content.cloneNode(true).children[0];  //clone this content and all content indisd, returns a doc fracgemant
        const header = card.querySelector("[data-header]")
        const address = card.querySelector("[data-address]")
        const ville = card.querySelector("[data-ville]")
        const region = card.querySelector("[data-region]")
        const tel = card.querySelector("[data-tel]")
        const body = card.querySelector("[data-body]")
       // const checkbox = card.querySelector("[data-checkbox]");
        //const button = button.querySelector("[data-button]");
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
       // testCheck(card);
        //function displayCard(card){
         
           //let selectedCard = document.querySelector('.card');
         
       //function displayCard(card){
         
          //  let mycards = document.getElementsByClassName('card');
          //  let attr = "card";
          //  for(i=0; i <mycards.length; i++){
          //  mycards[i].setAttribute('class', 'card');
                            
          //  }      
          

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

// function addSelect(){
//   let mycards =  document.querySelectorAll('.card');
//   mycards.forEach(el=>{el.append('')

//   })
// };

 // function testCheck(){  
// function testCheck(card){

//   let selectBox = document.querySelector("input[name=checkbox]");
//   selectBox.addEventListener('change', function(){
//     if(this.checked===false){ 
//       return -1;
//   }
//       else if(this.checked === true){
//         document.getElementById('test').innerHTML = "test" ; //+ card.textContent;
//       }
//     // 
//     })
//   }
  

// function testCheck(){
  
//   let selectBox = document.querySelector(".checkbox");
//     if(selectBox.checked===false){
//      return -1;
//     }
//     else if(selectBox.checked === true){
//       console.log(selectBox)
    
 
//     // document.getElementById('test').innerHTML = "hello";
//    }
//   }
  //contactsSelected(isSelected);
    
  


//contactsSelected(isSelected);
                   
// function contactsSelected(isSelected) {

 function getContacts (button){
    //document.getElementById('btn-card').innerHTML = "";
    //document.getElementById('user-cards').textContent;
    let coordinates = button.parentNode.textContent+'\n';
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

        
    