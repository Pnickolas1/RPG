
$(document).ready();

var startingTitoVitals = 100;


	$('#throwPizza').on('click', function(){
		var pizzaDamage = 10;
		$('#maddonAttack').html(" Maddon throws Pizza, Hits Francona!");

	});

	$('#throwBeer').on('click',function(){
		var beerDamage = 25;
		$('#maddonAttack').html("Maddon throws a Beer!");
	});

	$('#throwBat').on('click',function(){
		var batDamage = 50;
		$('#maddonAttack').html("Maddon thows a Bat!");
	});