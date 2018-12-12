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
var winSounds = ["assets/sounds/bam.mp3", "assets/sounds/cantstop.mp3" ,"assets/sounds/hellyeah.mp3","assets/sounds/war.mp3"];
var lossSounds = ["assets/sounds/ohcrap.mp3"];
var soundFile;




//functions
//Sets starting numbers for variables and displays Zobie's #
var randomStartingNumbers = function () {
    currentAmount = 0;
    randomZombie = Math.floor(Math.random() * 3);
    rick = Math.floor((Math.random() * 12) + 1);
    michonne = Math.floor((Math.random() * 12) + 1);
    daryl = Math.floor((Math.random() * 12) + 1);
    negan = Math.floor((Math.random() * 12) + 1);
    targetNumber = Math.floor((Math.random() * 121) + 19);

    $("#target-number").text(targetNumber);
    $("#current-amount").text(currentAmount);
    $("#win-total").text(winTotal);
    $("#loss-total").text(lossTotal);

}

//Checks currentAmount against Zombie's #
var checkCurrentAmount = function () {
    if (currentAmount === targetNumber) {
        //Trigger Win
        soundFile = new Audio(winSounds[Math.floor(Math.random()* winSounds.length)]);
        soundFile.play();
        winTotal++;
        $(".zombie").attr("src", zombiePictures[randomZombie]);
        randomStartingNumbers();
    } else if (currentAmount > targetNumber) {
        //Trigger Loss
        soundFile = new Audio(lossSounds[Math.floor(Math.random()* lossSounds.length)]);
        soundFile.play();
        lossTotal++;
        $(".zombie").attr("src", zombiePictures[randomZombie]);
        randomStartingNumbers();
    }
}

//Calls
$(document).ready(function () {
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