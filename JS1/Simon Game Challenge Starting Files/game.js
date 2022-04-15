var buttonColours = ["red" ,"blue" ,"yellow","green"];

var gamePattern = [];

var userClickedPattern = [];

var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/blue.mp3');

var level = 0;

function playAudio() { 
    audioElement.play(); 
}; 

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $("h1").html("Level "+level);
    level++;
};

document.addEventListener("keydown", function (event){
    nextSequence();
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};
//nextSequence();


$("body").keydown(nextSequence());

function animatedPress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};