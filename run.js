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
    var due = new Date("August 16, 2018 01:00:00"); //Use full name for month. 
    //end userinterface -- STOP TOUCHING


    //dont touch anything here
  if (true) {
        t.addCard(targetName+":"+targetId, "Added by: Hon. "+Judge, listID).then(function(response){
            var cardId = response.id;
            t.addDueDateToCard(cardId, due);
            if(Judge === "Kevin_Hodge"){
                t.addMemberToCard(cardId, "55ce07c4b872211d74b6645b");
            }
            if (Judge === "NathanBlackwood") {
                t.addMemberToCard(cardId, "5623e9939d6f01fa7b9fdb29");
            }
            if (Judge === "WilliamBlackwood") {
                t.addMemberToCard(cardId, "547a2aa7ec9d04dc2c918040");
            }
            if (Judge === "AdrianPliniusCilo") {
                t.addMemberToCard(cardId, "54106d30c52c3d827ea3a169");
            }
        })
    

        

        rbx.setRank(3788004, targetId, 1).then(function(response){
            console.log("response", response);
        })
  }
	
rbx.login(process.env.USER, process.env.PASS);
