function printAndSend() {
    // Generate PDF from the webpage
    const element = document.documentElement;
    const options = {
      margin: [10, 15, 10, 15], // Top, right, bottom, left margins (in mm)
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' },
    };

    html2pdf().set(options).from(element).save().then(function () {
        let fileURL = 'c:/Users/Hp/Downloads/invoice.pdf';
        window.open(fileURL);
      selectContact();
    }).catch(function (error) {
      console.error('Error generating PDF:', error);
    });
  }
    
  function selectContact() {
    if ('contacts' in navigator) {
      navigator.contacts.select(['email']).then(function (contacts) {
        if (contacts.length > 0) {
          var selectedEmail = getEmailFromContact(contacts[0]);
          if (selectedEmail) {
            sendEmail(selectedEmail);
          } else {
            console.log('No email address found in the selected contact.');
          }
        } else {
          console.log('No contacts selected.');
        }
      }).catch(function (err) {
        console.error('Error selecting contact:', err);
      });
    } else {
      console.log('The contacts API is not supported.');
    }
  }

  function getEmailFromContact(contact) {
    if (contact.email && contact.email.length > 0 && contact.email[0].value) {
      return contact.email[0].value;
    } else {
      return null;
    }
  }

  function sendEmail(email) {
    var subject = 'Votre facture';
    var body = 'Voir facture en pièce jointe.';
    var mailtoUrl = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open the email client with the PDF attached
    window.location.href = mailtoUrl;
  }