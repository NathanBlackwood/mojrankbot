//logins -- dont touch
var listID = "5b7350264a1ee71f51a0ce5b";
var on = true
var done = false;
const trello = require("trello");
    const t = new trello(process.env.API_KEY, process.env.TRELL_TOKEN);
const rbx = require("roblox-js");

    //userinterface -- touch this
    var targetName = "WilliamBlackwood";
    var targetId = "22859549";
    var Judge = "Jesus";
    //end userinterface -- STOP TOUCHING


    //dont touch anything here
  if (on === true) {
            rbx.setRank(3788004, targetId, 1).then(function(response){
            console.log("response", response);
	  
	  t.addCard(targetName+":"+targetId, "Added by: Hon. Judge "+Judge, listID);
		   
	on = false


        })
  }
	
	
    



rbx.login(process.env.USER, process.env.PASS);
    
