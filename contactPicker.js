

async function pickContact(){
        
    if ("contacts" in navigator && 
        "select" in navigator.contacts && 
        "getProperties" in navigator.contacts) {
        
    try {
    
        const availableProperties = await navigator.contacts.getProperties();
        
            const contactProperties = ['name','address', 'tel', 'email'];
         
        
         if (availableProperties.includes("name")) {
              
                    const contacts = await navigator
                    .contacts
                    .select(
                    contactProperties,
                    {multiple: true}
                    );
         
            if(contacts[0].address.length > 0){
            
             
        yourContact = contacts[0].name +  "<br />"  +contacts[0].address[0].addressLine + "<br />"+contacts[0].address[0].city+ "<br />"+contacts[0].address[0].region + ", "+contacts[0].address[0].postalCode +"<br />"+ contacts[0].tel + "<br />" +contacts[0].email;   
        
        }else{
             yourContact= contacts[0].name+"<br />"+contacts[0].tel+"<br />" + contacts[0].email;
        }
  
    }
    
    else {
        document.getElementbyId("problem").innerHTML  = "could not find contact";
       
        console.log("Contact Picker API on your device doesn't support address or email property");
        }
    } catch(error) {
    console.log("Unexpected error happened in Contact Picker API");
    }

    } else {
    console.log("Your browser doesn't support Contact Picker API");
    }
}

// async function displayContacts(){
//     await pickContact();
//     document.getElementById('test').innerHTML = yourContact;
// }