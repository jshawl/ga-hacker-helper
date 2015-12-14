$(document).ready(function(){
  console.log("YERP");
  $.getJSON('/auth').then(function(json){
    // it is possible to override this via the dev console. 
    // Not sure I have a better solution... :(
    if(json.isAuthenticated === "true"){
      console.log("Beep boop!");
    } else{
      alert("Log in first, please!");
      window.location = "/signup";
    }
  })
})
