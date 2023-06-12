// Fonction de validation
function validateField(champId, regex, errorMessage) {
  var champ = document.getElementById(champId);
  var champValue = champ.value;

  if (!regex.test(champValue)) {
      alert(errorMessage);
      champ.focus();
      return false;
  }

  return true;
}

// Vérification des champs à la perte du focus
document.getElementById('nom').addEventListener('blur', function() {
  validateField('nom', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un nom valide");
});

document.getElementById('prénom').addEventListener('blur', function() {
  validateField('prénom', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un prénom valide");
});

document.getElementById('email').addEventListener('blur', function() {
  validateField('email', /\S+@\S+\.\S+/, "Veuillez entrer une adresse email valide");
});

document.getElementById('objetD').addEventListener('blur', function() {
  validateField('objetD', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un objet valide");
});

document.getElementById('message').addEventListener('blur', function() {
  validateField('message', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un message valide");
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupération des valeurs des champs
  const objetD = document.getElementById('objetD').value;
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prénom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Revérification des champs
  if (!validateField('objetD', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un objet valide") ||
      !validateField('nom', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un nom valide") ||
      !validateField('prénom', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un prénom valide") ||
      !validateField('email', /\S+@\S+\.\S+/, "Veuillez entrer une adresse email valide") ||
      !validateField('message', /<script.*?>.*?<\/script>/gi, "Veuillez entrer un message valide")) {
    return;
  }

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
