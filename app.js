$('#caché').hide();

$('#photo1').hide();
$('#caché2').hide();

$('#photo2').hide();
$('#caché3').hide();

$(function(){


	var count = 0;
	var idTitre = $('#clicker');
	var textCaché2 = "Votre projet en étapes: <br>\
  <br>\
  -Présentation de votre projet <br>\
  -Rendez vous technique de votre projet <br>\
  -Présentation des devis <br>\
  -Démarrage des travaux <br>\
  -Appréciation de la prestation <br>\
  Les services de votre courtier en travaux sont :\
  GRATUITS";
  var photoCaché = '<img  src="image/icone/votre-projet.png" width="250" height="200" class="center-block img-responsive img-thumbnail" alt="logo projet">';
  var photoCaché2 = '<img src="image/icone/gestion-administrative.jpg" width="250" height="200" class="center-block img-responsive img-thumbnail" alt="logo projet">';

  var textCaché = "\
  Bienvenue chez : Action Travaux Occitanie\
  \
  Nous sommes ravis de vous accueillir sur notre site. Notre société vous offre un grand choix de services parfaitement adaptés à vos exigences.\
  \
  \
  \
  Vous souhaitez en savoir plus sur notre gamme de services ? Consultez notre offre.\
  \
  Faites connaissance avec notre entreprise et notre équipe. Nous sommes à votre disposition pour toute demande ou question. N'hésitez pas à nous contacter !<br>\
  ACTION TRAVAUX OCCITANIE <br>\
  est une société de courtage en travaux qui est spécialisé dans les travaux de rénovation intérieure ou extérieure, que ce soit pour carreler une cuisine, rénover une salle de bain ou une réfection de la maison de A à Z. <br>\
  action travaux occitanie\
  s'occupe également des travaux de construction ou encore de l'aménagement extérieur (jardin, terrasse)."

  var textCaché3 = "ACTION TRAVAUX OCCITANIE\
  peut vous informer ou vous orienter vis à vis des aides, crédits d'impôts, normes et lois en vigueur afférentes à vos projets de travaux.\
  Un accompagnement pour monter vos dossiers de financement.\
  Transmettre les informations sur les assurances obligatoires et conseillées.";




//------------------------------ 1ere fleche du clicker -----------------------------//

  $('#clicker').click(function(){
   count++;
       			//console.log(count);

             if (count%1 == 0){
              $('#caché').html(textCaché).show('slow');
            } if (count%2 == 0) {
              $('#caché').html(textCaché).hide('slow');
            }
          });

  $('#clickerSm').click(function(){
    count++;
              //console.log(count);

              if (count%1 == 0){
               $('#caché').html(textCaché).show('slow');
             } if (count%2 == 0) {
               $('#caché').html(textCaché).hide('slow');
             }
  });

  $('#clickerXs').click(function(){
    count++;
              //console.log(count);

              if (count%1 == 0){
               $('#caché').html(textCaché).show('slow');
             } if (count%2 == 0) {
               $('#caché').html(textCaché).hide('slow');
             }
  });

  //----------------------- 2 ieme fleche du clicker ------------------------//


  $('#click2').click(function(){
    count++;
      			// console.log(count);

            if (count%1 == 0){
              $('#photo1').html(photoCaché).show('slow');
              $('#caché2').html(textCaché2).show('slow');
            } if (count%2 == 0) {
              $('#photo1').html(photoCaché).hide('slow');
              $('#caché2').html(textCaché2).hide('slow');
            }
          });

  $('#click2Sm').click(function(){
    count++;
            // console.log(count);

            if (count%1 == 0){
              $('#photo1').html(photoCaché).show('slow');
              $('#caché2').html(textCaché2).show('slow');
            } if (count%2 == 0) {
              $('#photo1').html(photoCaché).hide('slow');
              $('#caché2').html(textCaché2).hide('slow');
            }
          });

  $('#click2Xs').click(function(){
    count++;
            // console.log(count);

            if (count%1 == 0){
              $('#photo1').html(photoCaché).show('slow');
              $('#caché2').html(textCaché2).show('slow');
            } if (count%2 == 0) {
              $('#photo1').html(photoCaché).hide('slow');
              $('#caché2').html(textCaché2).hide('slow');
            }
          });




//---------------------------3 ieme fleche du clicker ----------------------------//

  $('#click3').click(function(){
    count++;
      			// console.log(count);

            if (count%1 == 0){
              $('#photo2').html(photoCaché2).show('slow');
              $('#caché3').html(textCaché3).show('slow');
            } if (count%2 == 0) {
              $('#photo2').html(photoCaché2).hide('slow');
              $('#caché3').html(textCaché3).hide('slow');
            }
          });

  $('#click3Sm').click(function(){
    count++;
            // console.log(count);

            if (count%1 == 0){
              $('#photo2').html(photoCaché2).show('slow');
              $('#caché3').html(textCaché3).show('slow');
            } if (count%2 == 0) {
              $('#photo2').html(photoCaché2).hide('slow');
              $('#caché3').html(textCaché3).hide('slow');
            }
          });

  $('#click3Xs').click(function(){
    count++;
            // console.log(count);

            if (count%1 == 0){
              $('#photo2').html(photoCaché2).show('slow');
              $('#caché3').html(textCaché3).show('slow');
            } if (count%2 == 0) {
              $('#photo2').html(photoCaché2).hide('slow');
              $('#caché3').html(textCaché3).hide('slow');
            }
          });

});


/* quand je clique sur le bouton .clic qui correspond a une section 
  si on clique une fois 
      on vois le paragraphe en mode
  sinon si on clique une 2 ieme fois 
      on vois plus le paragraphe et disparais en mode slow
      */



      /* ----------------------------------------------------------------------------------------------------*/

//test d'un refacoring 

//       var paraPhoto = {
//         textCaché1: " Bienvenue chez : Action Travaux Occitanie\
//         \
//         Nous sommes ravis de vous accueillir sur notre site. Notre société vous offre un grand choix de services parfaitement adaptés à vos exigences.\
//         \
//         \
//         \
//         Vous souhaitez en savoir plus sur notre gamme de services ? Consultez notre offre.\
//         \
//         Faites connaissance avec notre entreprise et notre équipe. Nous sommes à votre disposition pour toute demande ou question. N'hésitez pas à nous contacter !<br> <br>\
//         ACTION TRAVAUX OCCITANIE <br>\
//         est une société de courtage en travaux qui est spécialisé dans les travaux de rénovation intérieure ou extérieure, que ce soit pour carreler une cuisine, rénover une salle de bain ou une réfection de la maison de A à Z. <br>\
//         action travaux occitanie\
//         s'occupe également des travaux de construction ou encore de l'aménagement extérieur (jardin, terrasse).",

//         textCaché2:  "Votre projet en étapes: <br>\
//         <br>\
//         -Présentation de votre projet <br>\
//         -Rendez vous technique de votre projet <br>\
//         -Présentation des devis <br>\
//         -Démarrage des travaux <br>\
//         -Appréciation de la prestation <br>\
//         Les services de votre courtier en travaux sont :\
//         GRATUITS",

//         textCaché3 : "ACTION TRAVAUX OCCITANIE\
//         peut vous informer ou vous orienter vis à vis des aides, crédits d'impôts, normes et lois en vigueur afférentes à vos projets de travaux.\
//         Un accompagnement pour monter vos dossiers de financement.\
//         Transmettre les informations sur les assurances obligatoires et conseillées.",

//         photoCaché2 : "<img  src='image/icone/votre-projet.png' width='250' height='200' class='center-block img-responsive img-thumbnail' alt='logo projet'>",

//         photoCaché3 : "<img src='image/icone/gestion-administrative.jpg' width='250' height='200' class='center-block img-responsive img-thumbnail' alt='logo projet'>"

//       };


//       function select(){
//         $('.clic').click(function(){
//           var leClic = $(this).data('texte');
//           console.log(leClic);


//         });

//       };



// select();