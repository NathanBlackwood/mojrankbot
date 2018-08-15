//logins -- dont touch
var listID = "5b7350264a1ee71f51a0ce5b";
var done = false;
const trello = require("trello");
    const t = new trello(process.env.API_KEY, process.env.TRELL_TOKEN);
const rbx = require("roblox-js");

    //userinterface -- touch this
    var targetName = "EthiopianChild3";
    var targetId = "645346813";
    var Judge = "Kevin_Hodge";
    //end userinterface -- STOP TOUCHING


    //dont touch anything here
  if (true) {
        t.addCard(targetName+":"+targetId, "Added by: Hon. Judge "+Judge, listID);

        rbx.setRank(3788004, targetId, 1).then(function(response){
            console.log("response", response);
        })
  }
	
	
    



rbx.login(process.env.USER, process.env.PASS);
    
