
var matrix = [
    {
        name: "NEO",
        startingAttack: 3,
        enemyAttack: 4,
        startingLife: 100,
        line: ""


    },
    {
        name: "TRINITY",
        startingAttack: 3,
        enemyAttack: 4,
        startingLife: 100,
        line: ""


    },

    {
        name: "AGENT SMITH",
        startingAttack: 3,
        enemyAttack: 4,
        startingLife: 100,
        line: ""


    },
    {
        name: "MORPHEUS",
        startingAttack: 3,
        enemyAttack: 4,
        startingLife: 100,
        line: ""

    }


];


var weapon = [
    {
        weapon1:{
            damage:2
        }
        

    },
    {
        weapon1:{
            damage: 2
        }
       

    },
    {
        weapon1: {
            damage:2
        }
       
    },
    {
        weapon1:{
            damage:2
        }
     
    }
];
//Global variables

var matrixState = {
    chosenCharacter: "",
    chosenDefender: "",
    chosenLife: 0,
    chosenAttack: 0,
    defenderLife: 0,
    defenderAttack: 0,
    userChosen: false,

}


$(document).ready(function () {



    $("#neo1").on("click", function () {

        if (matrixState.userChosen) {

            $("#neo1").css("background-color", "red");
            $("#neo1").appendTo("#charEnemy");
            $('.char1').attr('src', 'assets/images/587655603d491111d0d3be249bfafa5c.png');
            chosencha();
        } else {

            $("#neo1").appendTo("#charSelect");

            $("#neo1").css("background-color", "white");
            $('.char1').attr('src', 'assets/images/587655603d491111d0d3be249bfafa5c.png');
            matrixState.userChosen = true;

        }
        chosencha();
        // chosenEnmey();
        setText();
        $("#span1").remove();


    });

    $("#trinity1").on("click", function () {

        if (matrixState.userChosen) {

            $('.char2').attr('src', 'assets/images/images (1).jpeg');
            $("#trinity1").css("background-color", "red");
            $("#trinity1").appendTo("#charEnemy");

        } else {

            $('.char2').attr('src', 'assets/images/images (1).jpeg');
            $("#trinity1").appendTo("#charSelect");
            $("#trinity1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        chosencha();
        // chosenEnmey();
        setText();
        $("#span2").remove();

    });

    $("#agent1").on("click", function () {

        if (matrixState.userChosen) {


            $('.char3').attr('src', 'assets/images/p1159_1.jpg');
            $("#agent1").css("background-color", "red");
            $("#agent1").appendTo("#charEnemy");

        } else {

            $('.char3').attr('src', 'assets/images/p1159_1.jpg');
            $("#agent1").appendTo("#charSelect");
            $("#agent1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        chosencha();
        // chosenEnmey();
        setText();
        $("#span3").remove();

    });

    $("#morpheus1").on("click", function () {
        ;
        if (matrixState.userChosen) {

            $('.char4').attr('src', 'assets/images/images.jpeg');
            $("#morpheus1").css("background-color", "red")
            $("#morpheus1").appendTo("#charEnemy");

        } else {

            $('.char4').attr('src', 'assets/images/images.jpeg');
            $("#morpheus1").appendTo("#charSelect");
            $("#morpheus1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        chosencha();
    //    chosenEnmey();
        setText();
        $("#span4").remove();

    });

});


$(".attack").on("click", function () {
 
    var title = matrix[matrixState.chosenLife].startingLife;

   var damn = matrix[matrixState.chosenAttack].startingAttack;

    var equal = title - damn;

    console.log(equal);

    choosen()

})
// not working yet! 
function weap () {
    var a = weapon.weapon1.damage;

    console.log(a);
}



function setText() {
    var set = $(".card-title").text("Choose Your Defender");
    var weapy = $("#weapy").text("Choose your weapon");


}


function chosencha() {

    var title = matrix[matrixState.chosenLife].startingLife;

    $("#charr").val(title);

}


function chosenEnmey () {
    var title = matrix[matrixState.defenderLife].startingLife;

    $("#charr").val(title);

}



function choosen() {
    
    var user = matrix.name[0];

    console.log(user);

}


