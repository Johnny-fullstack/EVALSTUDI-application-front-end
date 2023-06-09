$(document).ready(() => {

    // Liste des catégories
  const aucuneCat = $('#Aucune');
  const baptêmeCat = $('#Baptême');
  const bébéCat = $('#Bébé');
  const coupleCat = $('#Couple');
  const familleCat = $('#Famille');
  const grossesseCat = $('#Grossesse');
  const mariageCat = $('#Mariage');
  const portraitCat = $('#Portrait');

    // Liste des photos
  const baptême = $('#baptême1, #baptême2, #baptême3');
  const bébé = $('#bebe1, #bebe2, #bebe3');
  const couple = $('#couple1, #couple2, #couple3');
  const famille = $('#famille1, #famille2, #famille3');
  const grossesse = $('#grossesse1, #grossesse2, #grossesse3');
  const mariage = $('#mariage1, #mariage2, #mariage3');
  const portrait = $('#portrait1, #portrait2, #portrait3');

//  baptêmeCat.click(function() {
//    bébé.add(couple).add(famille).add(grossesse).add(mariage).add(portrait).css('display', 'none');
//    baptême.css('display', 'initial');
//  });
//
//  bébéCat.click(function() {
//    baptême.add(couple).add(famille).add(grossesse).add(mariage).add(portrait).css('display', 'none');
//    bébé.css('display', 'initial');
//  });
//
//  coupleCat.click(function() {
//    baptême.add(bébé).add(famille).add(grossesse).add(mariage).add(portrait).css('display', 'none');
//    couple.css('display', 'initial');
//  });
//
//  familleCat.click(function() {
//    bébé.add(couple).add(baptême).add(grossesse).add(mariage).add(portrait).css('display', 'none');
//    famille.css('display', 'initial');
//  });
//
//  grossesseCat.click(function() {
//    bébé.add(couple).add(baptême).add(famille).add(mariage).add(portrait).css('display', 'none');
//    grossesse.css('display', 'initial');
//  });
//
//  mariageCat.click(function() {
//    bébé.add(couple).add(famille).add(baptême).add(grossesse).add(portrait).css('display', 'none');
//    mariage.css('display', 'initial');
//  });
//
//  portraitCat.click(function() {
//    bébé.add(couple).add(famille).add(grossesse).add(mariage).add(baptême).css('display', 'none');
//    portrait.css('display', 'initial');
//  });

  // Fonction pour charger les photos d'une catégorie via AJAX
  function chargerPhotos(categorie, photos) {
  // Cacher toutes les photos
  baptême.add(bébé).add(couple).add(famille).add(grossesse).add(mariage).add(portrait).css('display', 'none');
  
  // Afficher les photos de la catégorie sélectionnée
  photos.css('display', 'initial');
  };

  function initial() {
    baptême.add(bébé).add(couple).add(famille).add(grossesse).add(mariage).add(portrait).css('display', 'initial');
  };

// Choix de la catégorie

// Aucune
aucuneCat.click(function () {
  $.ajax({
    url: 'Galerie.html',
    method: 'POST',
    data: { categorie: 'baptême' },
    success: function (response) {
      initial();
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

// Baptême
baptêmeCat.click(function () {
  $.ajax({
    url: 'https://main--dapper-pegasus-9ff46c.netlify.app/front/Galerie.html',
    method: 'POST',
    data: { categorie: 'baptême' },
    success: function (response) {
      chargerPhotos(baptêmeCat, baptême);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

// Bébé
bébéCat.click(function () {
  $.ajax({
    url: 'Galerie.html',
    method: 'POST',
    data: { categorie: 'bébé' },
    success: function (response) {
      chargerPhotos(bébéCat, bébé);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

// Couple
coupleCat.click(function () {
  $.ajax({
    url: 'Galerie.html',
    method: 'POST',
    data: { categorie: 'couple' },
    success: function (response) {
      chargerPhotos(coupleCat, couple);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

// Famille
familleCat.click(function () {
  $.ajax({
    url: 'Galerie.html',
    method: 'POST',
    data: { categorie: 'famille' },
    success: function (response) {
      chargerPhotos(familleCat, famille);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

// Grossesse
grossesseCat.click(function () {
  $.ajax({
    url: 'Galerie.html',
    method: 'POST',
    data: { categorie: 'grossesse' },
    success: function (response) {
      chargerPhotos(grossesseCat, grossesse);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

// Mariage
mariageCat.click(function () {
  $.ajax({
    url: 'Galerie.html',
    method: 'POST',
    data: { categorie: 'mariage' },
    success: function (response) {
      chargerPhotos(mariageCat, mariage);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

// Portrait
portraitCat.click(function () {
  $.ajax({
    url: 'Galerie.html',
    method: 'POST',
    data: { categorie: 'portrait' },
    success: function (response) {
      chargerPhotos(portraitCat, portrait);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
});

});