$('document').ready(function(){

	// console.log("salut salut");
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
              GRATUITS"

	var textCaché = "Bienvenue chez : Action Travaux Occitanie\
\
              Nous sommes ravis de vous accueillir sur notre site. Notre société vous offre un grand choix de services parfaitement adaptés à vos exigences.\
\
\
\
              Vous souhaitez en savoir plus sur notre gamme de services ? Consultez notre offre.\
\
              Faites connaissance avec notre entreprise et notre équipe. Nous sommes à votre disposition pour toute demande ou question. N'hésitez pas à nous contacter !<br> <br>\
              ACTION TRAVAUX OCCITANIE <br>\
              est une société de courtage en travaux qui est spécialisé dans les travaux de rénovation intérieure ou extérieure, que ce soit pour carreler une cuisine, rénover une salle de bain ou une réfection de la maison de A à Z. <br>\
              action travaux occitanie\
              s'occupe également des travaux de construction ou encore de l'aménagement extérieur (jardin, terrasse)."

var textCaché3 = "ACTION TRAVAUX OCCITANIE\
                peut vous informer ou vous orienter vis à vis des aides, crédits d'impôts, normes et lois en vigueur afférentes à vos projets de travaux.\
                Un accompagnement pour monter vos dossiers de financement.\
                Transmettre les informations sur les assurances obligatoires et conseillées."
              
              




              $('#clicker').click(function(){
              	count++;
       			// console.log(count);

              	if (count%1 == 0){
              		$('#caché').html(textCaché).show('slow');
              	} if (count%2 == 0) {
              		$('#caché').html(textCaché).hide('slow');
              	}
              });


           	 $('#click2').click(function(){
             	count++;
      			// console.log(count);

             	if (count%1 == 0){
             		$('#caché2').html(textCaché2).show('slow');
             	} if (count%2 == 0) {
             		$('#caché2').html(textCaché2).hide('slow');
             	}
             });

             $('#click3').click(function(){
             	count++;
      			// console.log(count);

             	if (count%1 == 0){
             		$('#caché3').html(textCaché3).show('slow');
             	} if (count%2 == 0) {
             		$('#caché3').html(textCaché3).hide('slow');
             	}
             });
          










 });



