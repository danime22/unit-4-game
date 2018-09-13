
var matrix = [
    {
        name: "NEO",
        startingAttack: 3,
        currentAttack: 3,
        weapon: null,
        enemyAttack: 15,
        startingLife: 150,
        currentLife: 150,
        line: "",
        image: 'assets/images/587655603d491111d0d3be249bfafa5c.png'


    },
    {
        name: "TRINITY",
        startingAttack: 3,
        currentAttack: 3,
        weapon: null,
        enemyAttack: 10,
        startingLife: 100,
        currentLife: 100,
        line: "",
        image: 'assets/images/images (1).jpeg'


    },

    {
        name: "AGENT SMITH",
        startingAttack: 3,
        currentAttack: 3,
        weapon: null,
        enemyAttack: 25,
        startingLife: 200,
        currentLife: 200,
        line: "",
        image: 'assets/images/p1159_1.jpg'


    },
    {
        name: "MORPHEUS",
        startingAttack: 3,
        currentAttack: 3,
        weapon: null,
        enemyAttack: 15,
        startingLife: 150,
        currentLife: 150,
        line: "",
        image: 'assets/images/images.jpeg'

    }


];



var weapon = 
    {
        machineGun:{
            damage: 3
        },
        
        pistol:{
            damage: 2
        },

        shotgun: {
            damage: 2
        },
       
        sword:{
            damage: 1
        }
   
    };
//Global variables

var matrixState = {
    chosenCharacter: null,
    chosenDefender: null,
    defenderButtonId: "",
    userChosen: false,
    fighting: false,
    charactersDefeated: 0

}


$(document).ready(function () {

    

    $("#neo1").on("click", function () {
        handleCharacterSelection(0, "#neo1", ".char1", "#span1");
        

        // handleWeaponSelection(weapon.machineGun);
    });

    $("#trinity1").on("click", function () {
        //handleCharacterSelection(1, "#trinity1", ".char2", "#span2");  
        handleCharacterSelection(1, "#trinity1", ".char2", "#span2"); 
    });

    $("#agent1").on("click", function () {
        handleCharacterSelection(2, "#agent1", ".char3", "#span3");
    });

    $("#morpheus1").on("click", function () {
        handleCharacterSelection(3, "#morpheus1", ".char4", "#span4");
    });



});


$("#weapon1").on("click", function(){
    handleWeaponSelection(weapon.machineGun);
});
$("#weapon2").on("click", function () {
    handleWeaponSelection(weapon.pistol);
});
$("#weapon3").on("click", function () {
    handleWeaponSelection(weapon.shotgun);
});
$("#weapon4").on("click", function () {
    handleWeaponSelection(weapon.sword);
});




$(".attack").on("click", function () {

    
    if(!matrixState.fighting)
    {
        return;
    }  

    matrixState.chosenDefender.currentLife -= matrixState.chosenCharacter.currentAttack;
    matrixState.chosenCharacter.currentAttack += matrixState.chosenCharacter.startingAttack;
    if(matrixState.chosenCharacter.selectedWeapon != null)
    {
        matrixState.chosenCharacter.currentAttack += matrixState.chosenCharacter.selectedWeapon.damage;
    }
    l(matrixState.chosenDefender.currentLife);
    setChosenLife();
    setDefenderLife();

    if(!checkForGameEnd()){
        matrixState.chosenCharacter.currentLife -= matrixState.chosenDefender.enemyAttack;
    }


})

function checkForGameEnd()
{
    if(matrixState.chosenCharacter.currentLife <= 0) // lose
    {
        alert("Fucking loser!");
        location.reload();


    } 
    else if(matrixState.chosenDefender.currentLife <= 0)
    {
        $(matrixState.defenderButtonId).remove();
        matrixState.fighting = false;
        matrixState.chosenDefender = null;
        matrixState.charactersDefeated++;

        if(matrixState.charactersDefeated == 3)
        {
            alert("You won badass");   
        }
        return true;
    }

    return false;
}

function handleCharacterSelection(selectedCharIndex, charImageClassName, charButtonId, origSpanClass)
{
    l("Starting");
    if(matrixState.fighting)
    {
        l("returning");
        return;
    }

    if (matrixState.userChosen) {
        l("choosing defender");
        matrixState.chosenDefender = matrix[selectedCharIndex];

        $(charImageClassName).css("background-color", "red");
        $(charImageClassName).appendTo("#charEnemy");
        $(charButtonId).attr('src', matrixState.chosenDefender.image);
        matrixState.fighting = true;
        matrixState.defenderButtonId = charButtonId;
        setText("FIGHT!");
        setDefenderLife();

    } else {
        l("choosing char");
        matrixState.chosenCharacter = matrix[selectedCharIndex];
        $(charImageClassName).appendTo("#charSelect");

        $(charImageClassName).css("background-color", "white");
        $(charButtonId).attr('src', matrixState.chosenCharacter.image);
        matrixState.userChosen = true;
        setText("Choose Your Defender");
        setChosenLife();
    
    }

    l("setting state");
    

  
    // chosenEnmey();
    $(origSpanClass).remove();
}

function handleWeaponSelection(selectedWeapon)
{
    if(matrixState.chosenCharacter == null)
    {
        alert("Fucking choose a character first dummy!");
        return;
    }

    matrixState.chosenCharacter.selectedWeapon = selectedWeapon;
    matrixState.chosenCharacter.currentAttack += selectedWeapon.damage;
}




function setText(text) {
    $("#remaining").text(text);
}


function setChosenLife() {
    $("#charrChosen").val(getMeterValue(matrixState.chosenCharacter));

}

function setDefenderLife () {

    $("#charrDefender").val(getMeterValue(matrixState.chosenDefender));

}

function getMeterValue(character)
{
    return Math.floor((character.currentLife / character.startingLife) * 100);
}



function l(s)
{
    console.log(s);

}


// function audio() {
//     var source = "assets/The Matrix  Soundtrack- Juno Reactor Vs Don Davis - Navras.mp3";
//     var audio = $("#myAudio");
    
//     audio.addEventListener("click", function () {
//         audio.play();
    
   


// }




