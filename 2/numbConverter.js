var askNumber, resultUnite, resultDizaine, resultCentaine;

function convert(number){
	var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

	var uniteTxt = ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
	var dizaineTxt = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
	var centaineTxt = ['cent', 'deux-cent', 'trois-cent', 'quatre-cent', 'cinq-cent', 'six-cent', 'sept-cent', 'huit-cent', 'neuf-cent'];

	var result;

	if(isNaN(number)){
		alert("La valeur à convertir doit être un nombre !");
	}
	else{

		if(number >= 0 && number <= 999){

			if (number === 0) {
				alert("zéro");
				return;
			}

			numberToConvert = parseInt(number, 10);

			// On récupère les types de valeurs rentrés
			getUnite = numberToConvert % 10;
			getDizaine = (numberToConvert % 100 - getUnite) / 10;
			getCentaine = (numberToConvert % 1000 - number % 100) / 100;

			// On arrondit le nombre pour obtenir un entier
			getUnite = Math.round(getUnite);
			getDizaine = Math.round(getDizaine);
			getCentaine = Math.round(getCentaine);

			resultUnite = uniteTxt[getUnite - 1];
			resultDizaine = dizaineTxt[getDizaine - 1];
			resultCentaine = centaineTxt[getCentaine - 1];

			result = resultCentaine + ' ' + resultDizaine + ' ' + resultUnite;

			result = result.replace(" undefined", "");
			result = result.replace("undefined dix un", "onze");
			result = result.replace("undefined dix deux", "douze");
			result = result.replace("undefined dix trois", "treize");
			result = result.replace("undefined dix quatre", "quatorze");
			result = result.replace("undefined dix cinq", "quinze");
			result = result.replace("undefined dix six", "seize");

			alert("L'équivalent de " + numberToConvert + " est " + result);
		}
		else{
			if(number < 0){
				alert("Vous ne pouvez pas rentrer une valeur inférieure à 0 !");
			}
			else if(number > 999){
				alert("Vous ne pouvez pas rentrer une valeur supérieure à 999 !");
			}
		}

	}
}