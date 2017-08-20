$(document).ready(function(){

	$(document).ready(function(){ // fonctionnalité de validation du formulaire 

		$('#loading').hide();
		$('#success').hide();

		$('#valid').click(function(){
			valid = true;
			

			if($('#prénom').val() == ''){
				valid = false;
			}

			if($('#nom').val() == ''){
				valid = false;
			}
			if($('#mail').val()== ''){
				valid = false;
			}
			if($('#robot').attr('checked')){
				console.log("salut");
				valid = false;
			}
			else {
				$('#loading').fadeIn().delay(3000).fadeOut();

				setTimeout(function(){
					$('#success').show();
					$('#form').hide();
				}, 4000);
			

			}
		
			return false;
		});

	
	});



});

$('#loading').fadeIn().delay(3000).fadeOut();