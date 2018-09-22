var btnToFrench = document.getElementById('toFrenchConvert');
var btnToEnglish = document.getElementById('toEnglishConvert');

var aboutMe = document.getElementById('toTranslate1');
var aboutText = document.getElementById('toTranslate2');

var projectsTitle = document.getElementById('toTranslate3');
var projectsText = document.getElementById('toTranslate4');
var projectsList1 = document.getElementById('listToTranslate1');
var projectsList2 = document.getElementById('listToTranslate2');
var projectsList3 = document.getElementById('listToTranslate3');

var networkTitle = document.getElementById('toTranslate5');
var networkText = document.getElementById('toTranslate6');

var navbarAboutBtn = document.getElementById('toTranslate7');
var navbarProjectsBtn = document.getElementById('toTranslate8');
var navbarNetworksBtn = document.getElementById('toTranslate9');

var profileJob = document.getElementById('profile-job');

btnToFrench.addEventListener("click", function(){
	aboutMe.innerHTML = "À propos de moi.";
	aboutText.innerHTML = "Bienvenue sur mon portfolio.<br>Vous pouvez retrouver ici <b>la totalité de mes créations</b>. Je programme des sites internet depuis environ 1 an et demi. Je connais différents languages : <b>HTML, CSS, JS, PHP, Ruby, C# et Java</b>.<br>J'aime beaucoup créer des sites internet et jeux vidéos avec <b>Unity</b>. La majorité mes créations sont réalisées avec l'éditeur de texte <b>Sublime Text</b>.<br>J'adore jouer aux jeux développés par <b>Quantic Dream\'s</b> qui, pour moi, sont les plus développés.";

	projectsTitle.innerHTML = "Mes créations";
	projectsText.innerHTML = "J'ai déjà pu réaliser <b>quelques projets</b>. Les-voici:";
	projectsList1.innerHTML = "Shar";
	projectsList2.innerHTML = "Converso";
	projectsList3.innerHTML = "Convertisseur de nombres<br>(Essayez maintenant!)";

	networkTitle.innerHTML = "Passez-moi le \"Bonjour\" !";
	networkText.innerHTML = "Si vous souhaitez me contacter, je vous invite à vous rendre sur mes réseaux sociaux:"

	navbarAboutBtn.innerHTML = "À propos";
	navbarProjectsBtn.innerHTML = "Mes projets";
	navbarNetworksBtn.innerHTML = "Réseaux";

	profileJob.innerHTML = "Développeur web";
});

btnToEnglish.addEventListener("click", function(){
	aboutMe.innerHTML = "About me";
	aboutText.innerHTML = "Welcome on my presentation page.<br>You can find here <b>all my creations and projects</b>. I\'m programming websites <b>since 1 year</b> and half. I can program in differents languages : <b>HTML, CSS, JS, PHP, Ruby, C# and Java</b>.<br>I like create websites and videogames with <b>Unity</b>. My favorite text editor is, obviously, <b>Sublime Text</b>.<br>I\'m crazy about <b>Quantic Dream\'s</b> games.";

	projectsTitle.innerHTML = "My projects";
	projectsText.innerHTML = "I have realized <b>few projects</b>. That\'s a list:";
	projectsList1.innerHTML = "Shar";
	projectsList2.innerHTML = "Converso";
	projectsList3.innerHTML = "Number converter (Try now!)";

	networkTitle.innerHTML = "Say a \"Hello World!\"";
	networkText.innerHTML = "If you want to send me a message, I invite you to go on my social networks:";

	navbarAboutBtn.innerHTML = "About";
	navbarProjectsBtn.innerHTML = "Projects";
	navbarNetworksBtn.innerHTML = "Networks";

	profileJob.innerHTML = "Web developer";
});