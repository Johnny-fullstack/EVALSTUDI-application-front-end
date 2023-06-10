// Sélection du formulaire
const form = document.querySelector('form');

// Écoute de l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

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

  function sendEmail(body) {
    // Remplacez l'adresse e-mail fictive par votre adresse e-mail de destination
    var recipientEmail = 'johnny.kavu@gmail.com';
    
    // Envoi de l'e-mail fictif en utilisant l'API mailto
    'mailto:' + recipientEmail + '&body=' + encodeURIComponent(body);

    console.log(emailBody);
    afficherConfirmation();
  }
  
  // Fonction pour afficher le message de confirmation
function afficherConfirmation() {
    alert("Merci pour votre contribution Mr. ou Mme. "+ nom + "\n" + "Votre message a été transmis avec succès.");
  }

});
