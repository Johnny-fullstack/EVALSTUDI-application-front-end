$(document).ready(() => {

    // Liste des bouttons de catégories
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

  // Fonction pour charger les photos
  function chargerPhotos(categorie, photos) {
    baptême.add(bébé).add(couple).add(famille).add(grossesse).add(mariage).add(portrait).css('display', 'none');
    photos.css('display', 'initial');

    aucuneCat.add(baptêmeCat).add(bébéCat).add(coupleCat).add(familleCat).add(grossesseCat).add(mariageCat).add(portraitCat).css('color', 'white');
    categorie.css('color', 'rgb(185, 178, 161)')
  };

  // Fonction pour la catégorie 'Toutes'
  function initial(categorie) {
    baptême.add(bébé).add(couple).add(famille).add(grossesse).add(mariage).add(portrait).css('display', 'initial');
    baptêmeCat.add(bébéCat).add(coupleCat).add(familleCat).add(grossesseCat).add(mariageCat).add(portraitCat).css('color', 'white');
    categorie.css('color', 'rgb(185, 178, 161)')
  };

  // Choix de la catégorie

  // Aucune
  aucuneCat.click(function () {
    $.ajax({
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'aucune' },
      success: function () {
        initial(aucuneCat);
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  });

  // Baptême
  baptêmeCat.click(function () {
    $.ajax({
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'baptême' },
      success: function () {
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
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'bébé' },
      success: function () {
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
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'couple' },
      success: function () {
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
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'famille' },
      success: function () {
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
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'grossesse' },
      success: function () {
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
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'mariage' },
      success: function () {
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
      url: 'front/Galerie.html',
      method: 'POST',
      data: { categorie: 'portrait' },
      success: function () {
        chargerPhotos(portraitCat, portrait);
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  });

});