// setInterval(()=>{
//     document.querySelector(".dragon").classList.add("animateDragon");
// },1);
//1 ms interval will automatically add animateDragon class in Dragon and hence the dragon will move continuously in a loop.
//BUT, since the dragon after collision should start moving after reload, thus we're commenting this addition of class hee and will
// directly add the class in HTML file.


audioGame = new Audio("./sounds/music.mp3");
audioGameOver = new Audio("./sounds/gameover.mp3");

setTimeout(()=>{
    audioGame.play();
},1000);


var scorePoints = 0;
var dinoCross = true;     //variable if true --> dino successfully jumped over


document.onkeydown = function (e) {
    console.log(e.code);
    if (String(e.code) == "ArrowUp" || e.code == "Space") {
        console.log("yess");
        document.querySelector(".dino").classList.add("animateDino");
        setTimeout(() => {
            document.querySelector(".dino").classList.remove("animateDino");
        }, 900);
    }
}

//calculating the collision:
setInterval(() => {
    dino = document.querySelector(".dino");
    dragon = document.querySelector(".dragon");
    gameOver = document.querySelector(".gameOver");

    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dinoY = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    dragonX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dragonY = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));
    console.log(dinoX, dragonX, dinoY, dragonY);
    offsetX = Math.abs(dinoX - dragonX);
    offsetY = Math.abs(dinoY - dragonY);

    console.log(offsetX, offsetY);
    if (offsetX <= 200 && offsetY <= 22) {
        audioGameOver.play();
        console.log("Collision")
        gameOver.style.visibility = 'visible';
        gameOver.classList.add("animateGameOver");
        dragon.classList.remove("animateDragon");
        setTimeout(()=>{
            audioGameOver.pause();
            audioGame.pause();
        },1000);
    }
    else if (dinoCross && offsetX <= 225)     //offsetX determines that dino has jumped over dragon, bcoz for jumping they should be close
        {
            scorePoints += 1;
            dinoCross=false;
            //setting dinoCross (used as flag), so that value of scorePoints is not incremented continuously

            document.querySelector(".score").innerHTML = "Your score: " + scorePoints;

            setInterval(()=>{
                dinoCross=true;
            },4000);
            //after interval of 4s (assuming the time taken by dino to cross over the dragon), set the dinoCross to true, so that 
            //we can calculate the score of dino such that it has successfully croosed the dragon.
        }
}, 100);

// function updateScore(score)
// {
//     document.onkeyup=function(e){
//         if(e.code == Space)
//         {
//             return score+1;
//         }
//     }
// }