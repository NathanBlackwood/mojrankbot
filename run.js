//logins -- dont touch
var listID = "5b7350264a1ee71f51a0ce5b";
var debounce = false
var done = false;
const trello = require("trello");
    const t = new trello(process.env.API_KEY, process.env.TRELL_TOKEN);
const rbx = require("roblox-js");

    //userinterface -- touch this
    var targetName = "EthiopianChild3";
    var targetId = "645346813";
    var Judge = "Kevin_Hodge";
    var due = new Date("August 16, 2018 00:45:00"); //Use full name for month. Please use your mind for this part :D 
    //end userinterface -- STOP TOUCHING


    //dont touch anything here
  if (debounce === false) {
        t.addCard(targetName+":"+targetId, "Added by: Hon. "+Judge, listID).then(function(response){
            var cardId = response.id;
            t.addDueDateToCard(cardId, due);
        })
    

        

        rbx.setRank(3788004, targetId, 1).then(function(response){
            console.log("response", response);
        })
	  debounce = true
  }
	
rbx.login(process.env.USER, process.env.PASS);
