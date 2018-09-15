
var matrix = [
    {
        name: "NEO",
        startingAttack: 3,
        currentAttack: 3,
        weapon: null,
        enemyAttack: 15,
        startingLife: 150,
        currentLife: 150,
        line: "I know you're out there. I can feel you now!",
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
        line: "Dodge this!",
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
        line: "I'm going to be honest with you. I hate this place!",
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
        line: "This is your last chance. After this, there is no turning back!",
        image: 'assets/images/images.jpeg'

    }


];



var weapon =
{
    machineGun: {
        damage: 3,
        name: "Machine Gun"
    },

    pistol: {
        damage: 2,
        name: "Pistol"
    },

    shotgun: {
        damage: 2,
        name: "Shotgun"

    },

    sword: {
        damage: 1,
        name: "Sword"
    }

};
//Global variables

var matrixState = {
    chosenCharacter: null,
    chosenDefender: null,
    defenderButtonId: "",
    userChosen: false,
    fighting: false,
    charactersDefeated: 0,
    defenderParagraphClass: ""

}


$(document).ready(function () {

    $("#neo1").on("click", function () {
        handleCharacterSelection(0, "#neo1", ".char1", "#span1");
        

    });

    $("#trinity1").on("click", function () {

        handleCharacterSelection(1, "#trinity1", ".char2", "#span2");
    });

    $("#agent1").on("click", function () {
        handleCharacterSelection(2, "#agent1", ".char3", "#span3");
    });

    $("#morpheus1").on("click", function () {
        handleCharacterSelection(3, "#morpheus1", ".char4", "#span4");
    });



});


$("#weapon1").on("click", function () {
    handleWeaponSelection(weapon.machineGun, "#wazz1", "#weapon1");

});
$("#weapon2").on("click", function () {
    handleWeaponSelection(weapon.pistol, "#wazz2", "#weapon2");
});
$("#weapon3").on("click", function () {
    handleWeaponSelection(weapon.shotgun, "#wazz3", "#weapon3");
});
$("#weapon4").on("click", function () {
    handleWeaponSelection(weapon.sword, "#wazz4", "#weapon4");
});




$(".attack").on("click", function () {


    if (!matrixState.fighting) {
        return;
    }

    matrixState.chosenDefender.currentLife -= matrixState.chosenCharacter.currentAttack;
    matrixState.chosenCharacter.currentAttack += matrixState.chosenCharacter.startingAttack;
    if (matrixState.chosenCharacter.selectedWeapon != null) {
        matrixState.chosenCharacter.currentAttack += matrixState.chosenCharacter.selectedWeapon.damage;
    }
    l(matrixState.chosenDefender.currentLife);
    setChosenLife();
    setDefenderLife();

    if (!checkForGameEnd()) {
        matrixState.chosenCharacter.currentLife -= matrixState.chosenDefender.enemyAttack;

    }


})

function checkForGameEnd() {
    if (matrixState.chosenCharacter.currentLife <= 0) // lose
    {
        alert("NICE TRY!");
        location.reload();


    }
    else if (matrixState.chosenDefender.currentLife <= 0) {
        $(matrixState.defenderButtonId).remove();

        matrixState.fighting = false;
        matrixState.chosenDefender = null;
        $(matrixState.defenderParagraphClass).remove();
        matrixState.charactersDefeated++;
        setText("Choose Your Defender");
        if (matrixState.charactersDefeated == 3) {
            alert("YOU WON!");
        }
        return true;
    }

    return false;
}

function handleCharacterSelection(selectedCharIndex, charImageClassName, charButtonId, origSpanClass) {
    l("Starting");
    if (matrixState.fighting) {
        l("returning");
        return;
    }
    alert(matrix[selectedCharIndex].line);
    if (matrixState.userChosen) {
        l("choosing defender");
        matrixState.chosenDefender = matrix[selectedCharIndex];

        $(charImageClassName).css("background-color", "red");
        $(charImageClassName).appendTo("#charEnemy");
        $(charButtonId).attr('src', matrixState.chosenDefender.image);
        matrixState.fighting = true;
        matrixState.defenderButtonId = charButtonId;
        matrixState.defenderParagraphClass = charImageClassName;

        setText("FIGHT!");
        setDefenderLife();

    } else {
        l("choosing char");
        matrixState.chosenCharacter = matrix[selectedCharIndex];
        $(charImageClassName).appendTo("#charSelect");

        $(charImageClassName).css("background-color", "green");
        $(charButtonId).attr('src', matrixState.chosenCharacter.image);
        matrixState.userChosen = true;
        setText("Choose Your Defender");
        var audio = new Audio('assets/The Matrix  Soundtrack- Juno Reactor Vs Don Davis - Navras.mp3');
        audio.play();
        setChosenLife();

    }

    l("setting state");


    $(origSpanClass).remove();
}

function handleWeaponSelection(selectedWeapon, weaponClass, weaponId) {
    if (matrixState.chosenCharacter == null) {
        alert("Choose your character first!");
        return;
    }

    if (matrixState.chosenCharacter.selectedWeapon != null) {
        return;
    }
    matrixState.chosenCharacter.selectedWeapon = selectedWeapon;
    matrixState.chosenCharacter.currentAttack += selectedWeapon.damage;

    $(weaponClass).css("background-color", "#003B1F");
    // $(weaponClass).width(100);
    $(weaponId).height(150);
    $(weaponId).width(150);
    $("#weapy").text(selectedWeapon.name + " Selected " );
}




function setText(text) {
    $("#remaining").text(text);
}


function setChosenLife() {
    $("#charrChosen").val(getMeterValue(matrixState.chosenCharacter));

}

function setDefenderLife() {

    $("#charrDefender").val(getMeterValue(matrixState.chosenDefender));

}

function getMeterValue(character) {
    return Math.floor((character.currentLife / character.startingLife) * 100);
}



function l(s) {
    console.log(s);

}



