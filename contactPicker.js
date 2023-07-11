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
         
                if(contacts[0].address[0].email){
          
                emailAddress = contacts[0].address[0].email; 
                      }else{
                        document.getElementById('problem') = "noemailFound";
                      }
           
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
    return emailAddress;
}

function printAndSend() {
    // Generate PDF from the webpage
    const element = document.documentElement;
    const options = {
      margin: [10, 10, 10, 10], // Top, right, bottom, left margins (in mm)
      filename: 'webpage.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(options).from(element).save().then(function () {
        selectContact();
      }).catch(function (error) {
        document.getElementById('problem').innerHTML = 'Error generating PDF:'+ error;
      })
    }

    function selectContact() {
       
        if ('contacts' in navigator) {
          navigator.contacts.select(['email']).then(function (contacts) {
            if (contacts.length > 0) {
               var selectedEmail = pickContact(); //returns email address
               // var selectedEmail = getEmailFromContact(contacts[0].address[0].email);
              if (selectedEmail) {
                sendEmail(selectedEmail); //email adddress is selected mail
              } else {
                document.getElementById('problem').innerHTML = 'No email address found in the selected contact.'
                
              }
            } else {
            document.getElementById('problem').innerHTML = 'No contacts selected.';
            }
          }).catch(function (err) {
            console.error('Error selecting contact:', err);
          });
        } else {
            document.getElementById('problem').innerHTML = 'The contacts API is not supported.';
        }
      }
  

//   function getEmailFromContact(contact) {

//     if (contact && contact[0].address[0].email >0) {
//       return contact[0].address[0].email;
//     } else {
//       return null;
//     }
//   }
  function sendEmail(email) {
    var subject = 'facture';
    var mailtoUrl = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);

    // Open the email client with the PDF attached
    window.location.href = mailtoUrl;
  }


 