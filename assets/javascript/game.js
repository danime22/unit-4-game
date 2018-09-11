
var matrix = [
    {
        name: "NEO",
        startingAttack: 0,
        enemyAttack: 0,
        chosenLife: 150,
        line: ""


    },
    {
        name: "TRINITY",
        startingAttack: 0,
        enemyAttack: 0,
        chosenLife: 100,
        line: ""


    },

    {
        name: "AGENT SMITH",
        startingAttack: 0,
        enemyAttack: 0,
        chosenLife: 200,
        line: ""


    },
    {
        name: "MORPHEUS",
        startingAttack: 0,
        enemyAttack: 0,
        startingLife: 170,
        line: ""

    }


];


var weapon = [
    {
        weapon1: "gun1",
        damage: 2,

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

var matrixState = {
    chosenCharacter: "",
    chosenDefender: "",
    chosenLife: 0,
    chosenAttack: 0,
    defenderLife: 0,
    defenderAttack: 0,
    userChosen: false,

}


// }
// var character1 = "";
// var character2 = "";
// var weapons = "";
// var damage = 0;
// var life= 0;
// var userChosen = false;
// var attacked = 0;



// $("myAudio").src=matrix.song;

$(document).ready(function () {



    $("#neo1").on("click", function () {

        if (matrixState.userChosen) {

            $("#neo1").css("background-color", "red");
            $("#neo1").appendTo("#charEnemy");

        } else {

            $("#neo1").appendTo("#charSelect");

            $("#neo1").css("background-color", "white");
            matrixState.userChosen = true;

        }
        setText();
        $("#span1").remove();


    });

    $("#trinity1").on("click", function () {

        if (matrixState.userChosen) {

            $("#trinity1").css("background-color", "red");
            $("#trinity1").appendTo("#charEnemy");

        } else {
            $("#trinity1").appendTo("#charSelect");
            $("#trinity1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        setText();
        $("#span2").remove();

    });

    $("#agent1").on("click", function () {

        if (matrixState.userChosen) {

            $("#agent1").css("background-color", "red");
            $("#agent1").appendTo("#charEnemy");

        } else {
            $("#agent1").appendTo("#charSelect");
            $("#agent1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        setText();
        $("#span3").remove();

    });

    $("#morpheus1").on("click", function () {
        ;
        if (matrixState.userChosen) {

            $("#morpheus1").css("background-color", "red")
            $("#morpheus1").appendTo("#charEnemy");

        } else {
            $("#morpheus1").appendTo("#charSelect");
            $("#morpheus1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        setText();
        $("#span4").remove();

    });


});

function setText() {
    var set = $(".card-title").text("Choose Your Defender");
    var weapy = $("#weapy").text("Choose your weapon");


}

function idk() {
    if ($(".attack").on("click", function () {
        chosenCharacter += matrix.name.chosenLife - chosenE
    }));
}