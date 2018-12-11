$(document).ready(function () {

    //Variables
    var rick = 0;
    var michonne = 0;
    var daryl = 0;
    var negan = 0;
    var targetNumber = 0;
    var currentAmount = 0;
    var zombieNumber = 1;
    var winTotal = 0;
    var lossTotal = 0;

    //functions
    //Sets starting numbers for variables and displays Zobie's #
    var randomStartingNumbers = function () {
        currentAmount = 0;
        rick = Math.floor((Math.random() * 21) + 1);
        michonne = Math.floor((Math.random() * 51) + 10);
        daryl = Math.floor((Math.random() * 71) + 20);
        negan = Math.floor((Math.random() * 6) + 1);
        targetNumber = Math.floor((Math.random() * 450) + 175);

        $("#target-number").text(targetNumber);
        $("#current-amount").text(currentAmount);
        $("#win-total").text(winTotal);
        $("#loss-total").text(lossTotal);

    }

    //Checks currentAmount against Zombie's #
    var checkCurrentAmount = function () {
        if (currentAmount === targetNumber) {
            //Trigger Win
            winTotal++;
            randomStartingNumbers();
        } else if (currentAmount > targetNumber) {
            //Trigger Loss
            lossTotal++;
            randomStartingNumbers();
        }
    }

    //Calls

    randomStartingNumbers();
    
    //Rick Button Click
    $("#rick").on("click", function () {
        currentAmount += rick;
        $("#current-amount").text(currentAmount);
        checkCurrentAmount();
    });
    //Michonne Button Click
    $("#michonne").on("click", function () {
        currentAmount += michonne;
        $("#current-amount").text(currentAmount);
        checkCurrentAmount();
    });
    //Daryl Button Click
    $("#daryl").on("click", function () {
        currentAmount += daryl;
        $("#current-amount").text(currentAmount);
        checkCurrentAmount();
    });
    //Neegan Button Click
    $("#negan").on("click", function () {
        currentAmount += negan;
        $("#current-amount").text(currentAmount);
        checkCurrentAmount();
    });

});