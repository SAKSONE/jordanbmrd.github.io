var element = document.getElementById("profile-name");
var profileName = "Jordan BAUMARD";
var array = profileName.split("");
var nameLooper;

function typeName(){
      if(array.length > 0){
      	element.innerHTML += array.shift();
      }
      else{
      	clearTimeout(nameLooper);
      }

      var nameSpeed = 60;
      nameLooper = setTimeout('typeName()', nameSpeed);
}

/*var sec_element = document.getElementById("profile-job");
var profileJob = "Web developer";
var sec_array = profileJob.split("");
var jobLooper;

function typeJob(){
      if(sec_array.length > 0){
            sec_element.innerHTML += sec_array.shift();
      }
      else{
            clearTimeout(jobLooper);
      }

      var jobSpeed = 60;
      jobLooper = setTimeout('typeJob()', jobSpeed);
}*/

typeName();
/*typeJob();*/