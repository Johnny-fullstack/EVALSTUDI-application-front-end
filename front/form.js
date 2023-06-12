const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupération des valeurs des champs
  const objetD = document.getElementById('objetD').value;
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prénom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Construction du corps du message
  var emailBody = 'Objet : ' + objetD + '\n\n';
  emailBody += 'Message : ' + message + '\n\n';
  emailBody += 'Nom : ' + nom + '\n';
  emailBody += 'Prénom : ' + prenom + '\n';
  emailBody += 'email : ' + email;

  sendEmail(emailBody);

  // Fonction d'envoi
  function sendEmail(body) {
    var recipientEmail = 'johnny.kavu@gmail.com';

    'mailto:' + recipientEmail + '&body=' + encodeURIComponent(body);

    console.log(emailBody);
    envoiConfirmation();
  }
  
  function envoiConfirmation() {
    alert("Merci pour votre contribution Mr. ou Mme. "+ nom + "\n" + "Votre message a été transmis avec succès.");
  }

});
