$(document).ready(function () {

    //Variables
    var rick = 0;
    var michonne = 0;
    var daryl = 0;
    var negan = 0;
    var targetNumber = 0;
    var currentAmount = 0;
    var winTotal = 0;
    var lossTotal = 0;
    var randomZombie = 0;
    var zombiePictures = ["assets/images/zombie1.jpg", "assets/images/zombie2.jpg", "assets/images/zombie3.png"];

    //functions
    //Sets starting numbers for variables and displays Zobie's #
    var randomStartingNumbers = function () {
        currentAmount = 0;
        randomZombie = Math.floor(Math.random() * 3);
        rick = Math.floor((Math.random() * 13) + 1);
        michonne = Math.floor((Math.random() * 13) + 1);
        daryl = Math.floor((Math.random() * 13) + 1);
        negan = Math.floor((Math.random() * 13) + 1);
        targetNumber = Math.floor((Math.random() * 122) + 19);

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
            $(".zombie").attr("src", zombiePictures[randomZombie]);
            randomStartingNumbers();
        } else if (currentAmount > targetNumber) {
            //Trigger Loss
            lossTotal++;
            $(".zombie").attr("src", zombiePictures[randomZombie]);
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