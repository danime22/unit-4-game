
var matrix = [
    {
        name: "NEO",
        startingAttack: 0,
        enemyAttack: 0,
        starting: 150,
        line: ""


    },
    {
        name: "TRINITY",
        startingAttack: 0,
        enemyAttack: 0,
        starting: 100,
        line: ""


    },

    {
        name: "AGENT SMITH",
        startingAttack: 0,
        enemyAttack: 0,
        startingLife: 200,
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
            $('.char1').attr('src','assets/images/587655603d491111d0d3be249bfafa5c.png');

        } else {

            $("#neo1").appendTo("#charSelect");
            
            $("#neo1").css("background-color", "white");
            $('.char1').attr('src','assets/images/587655603d491111d0d3be249bfafa5c.png');
            matrixState.userChosen = true;

        }
        setText();
        $("#span1").remove();


    });

    $("#trinity1").on("click", function () {

        if (matrixState.userChosen) {
           
            $('.char2').attr('src','assets/images/images (1).jpeg');
            $("#trinity1").css("background-color", "red");
            $("#trinity1").appendTo("#charEnemy");

        } else {
         
            $('.char2').attr('src','assets/images/images (1).jpeg');
            $("#trinity1").appendTo("#charSelect");
            $("#trinity1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        setText();
        $("#span2").remove();

    });

    $("#agent1").on("click", function () {

        if (matrixState.userChosen) {
           
         
            $('.char3').attr('src','assets/images/p1159_1.jpg');
            $("#agent1").css("background-color", "red");
            $("#agent1").appendTo("#charEnemy");

        } else {
           
            $('.char3').attr('src','assets/images/p1159_1.jpg');
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
         
            $('.char4').attr('src','assets/images/images.jpeg');
            $("#morpheus1").css("background-color", "red")
            $("#morpheus1").appendTo("#charEnemy");

        } else {
          
            $('.char4').attr('src','assets/images/images.jpeg');
            $("#morpheus1").appendTo("#charSelect");
            $("#morpheus1").css("background-color", "white");
            matrixState.userChosen = true;
        }
        setText();
        $("#span4").remove();

    });
    
    // idk();

});

// function idk() {
//     $(".attack").on("click", function () {
//         alert("hey");

//         defenderLife = matrix.chosenLife;

        
//         // chosenCharacter = matrix.name;
//         defenderLife--;
        
        
//     });
// }

// function idk1() {
//     $(".reset").on("click", function(){
//         alert("hello");
      
//     });
// }

// idk1();

$(".reset").on("click", function() {
  alert("what");
})

$(".attack").on("click", function () {
    // alert("why");
  var cho = "";
//   matrixState.chosenCharacter == matrix.name;
//   for (i=0; i< matrix.length; i++) {
//       matrix.indexOf(i);
//   }

matrixState.chosenCharacter = matrix[0];
cho= matrixState.chosenCharacter;
//   matrix.chosenLife === matrixState.chosenLife;
  
    console.log(cho);
    // getCharacter()
})
// function getCharacter() {
//     var chosenCharacter = "";
//     for (i=0; i<matrix.length; i++) {
//         matrix.indexOf(i) >= 0;

//     //     if(matrix.indexOf(i)>=0) {
//     //         chosenCharacter+="";
//     //     } else {
//     //         chosenCharacter+=matrix.name[i];
//     //     }
//     // }

//     return chosenCharacter;
// }



function setText() {
    var set = $(".card-title").text("Choose Your Defender");
    var weapy = $("#weapy").text("Choose your weapon");


}


function reset() {

}



// function initializeMatrix () {
//     var mat = matrix[matrixState.chosenLife].name;

//     matrix.userChosen = true;
//     matrixState.chosenLife

// }

