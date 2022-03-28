var randomNumber1 = (Math.floor(Math.random() * 5)) + 1;
var randomNumber2 = (Math.floor(Math.random() * 5)) + 1;
console.log(randomNumber1);

var randomDiceImg1 = "dice" + randomNumber1 + ".png";

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImg1;
var randomImageSource2 = "images/" + randomDiceImg2;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!! 😄";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!!! 😄";
}

else {
    document.querySelector("h1").innerHTML = "Draw!!! 😐";
}