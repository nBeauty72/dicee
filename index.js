var randomNumber1= Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice" + randomNumber1 + ".png";
var randomImageSelector = "images/"+ randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSelector);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImageSelector2 = "images/dice"+randomNumber2+ ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSelector2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML ="💖 Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML =" Player 2 wins!💖";
}
else{
  document.querySelector("h1").innerHTML =" Draw!💖";
}



// document.querySelectorAll("img")[0].setAttribute("src", "images/dice" +Math.floor(Math.random()*6)+1 + ".png");
// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" +Math.floor(Math.random()*6)+1 + ".png");
//
// if(document.querySelectorAll("img")[0].setAttribute("src","images/dice"+Math.floor(Math.random()*6)+1 + ".png")
//  > document.querySelectorAll("img")[1].setAttribute("src","images/dice"+Math.floor(Math.random()*6)+1 + ".png")
// ){
//   document.querySelector("h1").innerHTML ="💖 Player 1 wins!";
// }
// else if(document.querySelectorAll("img")[1].setAttribute("src","images/dice"+Math.floor(Math.random()*6)+1 + ".png")
// >document.querySelectorAll("img")[0].setAttribute("src","images/dice"+Math.floor(Math.random()*6)+1 + ".png")
// ){
//   document.querySelector("h1").innerHTML =" Player 2 wins!💖";
// }
// else{
//   document.querySelector("h1").innerHTML =" Draw!💖";
// }
