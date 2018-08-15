//logins -- dont touch
var listID = "5b7350264a1ee71f51a0ce5b";
var on = true
var done = false;
const trello = require("trello");
    const t = new trello(process.env.API_KEY, process.env.TRELL_TOKEN);
const rbx = require("roblox-js");

    //userinterface -- touch this
    var targetName = "PLAYER NAME";
    var targetId = "USER ID";
    var Judge = "YOUR NAME";
    var due = new Date("January 1, 2018 00:00:00"); //Use full name for month. 
    //end userinterface -- STOP TOUCHING


    //dont touch anything here
  if (true) {
        t.addCard(targetName+":"+targetId, "Added by: Hon. "+Judge, listID).then(function(response){
            var cardId = response.id;
            t.addDueDateToCard(cardId, due);
        })
    

        

        rbx.setRank(3788004, targetId, 1).then(function(response){
            console.log("response", response);
        })
  }
	
rbx.login(process.env.USER, process.env.PASS);
