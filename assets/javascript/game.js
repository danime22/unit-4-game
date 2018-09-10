
// var matrix = {
//         character: {
//             name: ["neo", "trinity", "morpheus", "agent smith"]
//         },
//         weapon: {
//             weapy: ["", "", "", ""]
//         }

// }



// var attack="";
var character1 = "";
var character2 = "";
var weapons = "";
var damage = "";
var life= "";
var userChosen=false;
matrixState="";



$(document).ready(function () {
  

    $("#neo1").on("click", function () {
     if(userChosen) {
         $("#neo1").appendTo("#charEnemy");
     } else {
         $("#neo1").appendTo("#charSelect");
         userChosen = true;
     }
       
        $("#span1").remove();
  
    });

    $("#trinity1").on("click", function () {
        if (userChosen) {
            $("#trinity1").appendTo("#charEnemy");
            
        } else {
            $("#trinity1").appendTo("#charSelect");
            userChosen = true;
        }
        $("#span2").remove();


    });

    $("#agent1").on("click", function () {
        if (userChosen) {
            $("#agent1").appendTo("#charEnemy");
        } else {
            $("#agent1").appendTo("#charSelect");
            userChosen = true;
        }
        $("#span3").remove();


    });

    $("#morpheus1").on("click", function () {
        if (userChosen) {
            $("#morpheus1").appendTo("#charEnemy");
        } else {
            $("#morpheus1").appendTo("#charSelect");
            userChosen = true;
        }

        $("#span4").remove();

    });
        



});

