try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  var DiceImage  = "/images/dice" + randomNumber + ".png";
  var  img1 = document.querySelectorAll("img")[0];      

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.getElementById("btnn").addEventListener("click", function(){
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  var DiceImage  = "/images/dice" + randomNumber + ".png";
  var  img1 = document.querySelectorAll("img")[0];      

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
 
img1.setAttribute("src", DiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);  




 if (randomNumber > randomNumber2){
document.getElementById("demo").innerHTML = "Player 1 Wins!";
 }  else if (randomNumber2 > randomNumber){
document.querySelector("h1").innerHTML = "Player 2 Wins!"; 
}else {
document.querySelector("h1").innerHTML = "Draw!";
}
});
