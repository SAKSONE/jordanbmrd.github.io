function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function guessTheNumber(max){
	if(max === null){
		alert("Vous devez choisir un maximum !");
	}
	else{
		var number = getRandomInt(parseInt(max));
		var ask = parseInt(prompt("Essayez de deviner le nombre entre 0 et " + parseInt(max)));
		var trys = 0;
		console.log(number);

		while(ask != number){
			trys++;
			if (ask < number) {
				ask = parseInt(prompt("C'est plus !"));
			}
			else if(ask > number) {
				ask = parseInt(prompt("C'est moins !"));
			}
		}
		alert("Bravo ! Le nombre était " + number + ".\nVous avez fait " + trys + " essais faux.");
	}
}
