
var matrix = [
    {
        name: "NEO",
        attack: "",
        life: 100,
        song:"assets/The Matrix  Soundtrack- Juno Reactor Vs Don Davis - Navras.mp3",
        line:""
    },
    {
        name: "TRINITY",
        attack: "",
        life: 100,
        song:"assets/The Matrix  Soundtrack- Juno Reactor Vs Don Davis - Navras.mp3",
        line:""
    },

    {
        name: "AGENT SMITH",
        attack: "",
        life: 100,
        song:"assets/The Matrix  Soundtrack- Juno Reactor Vs Don Davis - Navras.mp3",
        line:""
    },
    {
        name: "MORPHEUS",
        attack: "",
        life: 100,
        song:"assets/The Matrix  Soundtrack- Juno Reactor Vs Don Davis - Navras.mp3",
        line:""
    }


];


var weapon = [
    {
        weapon1: "gun1",
        damage: 13,
       
    },
    {
        weapon1: "gun2",
        damage: 7,
       

    },
    {
        weapon1: "gun3",
        damage: 8,
        

    },
    {
        weapon1: "sword",
        damage: 5,
       
    }
];

// var attack="";
// var gameState= {


// }
var character1 = "";
var character2 = "";
var weapons = "";
var damage = "";
var life= "";
var userChosen = false;
matrixState = "";


$("myAudio").src=matrix.song;

$(document).ready(function () {

 

    $("#neo1").on("click", function () {
       
        if (userChosen) {
            $("#neo1").appendTo("#charEnemy");
            
        } else {
            $("#neo1").appendTo("#charSelect");
            userChosen = true;
        }

        $("#span1").remove();
        setText();
        
       
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

function setText() {
    var set= $(".card-title").text("Choose Your Enemy");
    var weapy = $("#weapy").text("Choose your weapon");
    
}




