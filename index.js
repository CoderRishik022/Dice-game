var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

document.getElementsByClassName("img1")[0].src="./images/dice"+randomNumber1+".png";
document.getElementsByClassName("img2")[0].src="./images/dice"+randomNumber2+".png";

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player2 Wins🚩";
}
else{
    document.querySelector("h1").textContent="Draw";
}