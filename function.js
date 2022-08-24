
 
const rollSound = document.getElementById('rollSound');
const btn = document.getElementById('play');

btn.addEventListener("click", e => rollSound.paused ? rollSound.play() : rollSound.pause());
  

let start_msg = document.getElementById("start-msg");
let container = document.getElementById("container");
let cloud = document.getElementById("cloud");
let running = document.getElementById("running-naruto");
let start = document.getElementById("start");
let road = document.getElementById("road");
let cactus = document.getElementById("cactus");
let score = document.getElementById("score");
let playerScore = 0;
let over = document.getElementById("over");
let highScore = playerScore;
// let jump = document.getElementsByClassName("jump");



showhighScore = ()=>{
    highScore = document.getElementById("highscore");
    gethighscore = localStorage.getItem("highscore");
    highScore.innerHTML = "<b>High-Score: " + gethighscore;
}


// Function for score
interval = null;
let scoreCounter = ()=>{
    playerScore++; 
    score.innerHTML = `<b>Score: ${playerScore}</b>`;

    if(playerScore > 55){
        document.getElementById("running-naruto").src = "./character/blast.gif";
    }
    if(playerScore > 56){
        document.getElementById("running-naruto").src = "./character/goku.gif";
        document.getElementById("running-naruto").style.height = "150px";
        document.getElementById("running-naruto").style.width = "160px";
        document.getElementById("running-naruto").style.bottom = "48px";
        document.getElementById("cloud").style.display= "none";
        // document.getElementById("cactus").style.display = "none";
        // running = document.getElementById("running-naruto").src = "goku.gif";
    }
    if(playerScore > 60){
        document.getElementById("villian").style.display = "block";
        document.body.style.backgroundColor = " #cc3232";
       
 

    }
    if(playerScore > 90){
        document.getElementById("running-naruto").src ="./character/sonic.gif";
        document.getElementById("running-naruto").style.height ="130px";
        document.body.style.backgroundColor = "#deacff";
    }
    if(playerScore > 120){
        document.getElementById("cactus").src ="./character/fire2.gif";
        document.getElementById("cactus").style.height ="130px";
      
    }

    if(playerScore > 150){
        document.getElementById("running-naruto").src = "./character/deadpool.gif";
        document.body.style.backgroundColor = "yellow";
        // document.addEventListener( "keydown",(e)=>{
        // if(e.key == "ArrowUp"){
        //     if(running.classList != "highjump"){
        //         running.classList.add("highjump");
        //         setTimeout(() => {
        //             running.classList.remove("highjump");
        //         }, 600);
        //     }
        // }
        // })

    }
    
    if(playerScore > 180){
        document.getElementById("cactus").src ="./character/green-dinosaur.gif";

        document.body.style.backgroundColor = "#310052";
        // cactus.style.animation = "cactus 1.2s linear infinite";

    }

    if(playerScore > 200){
        document.getElementById("villian").src ="./character/invisible.gif";
        document.body.style.backgroundColor = "#99c140";
    }
    if(playerScore > 220){
        // document.getElementById("cloud").src = "gas.gif";
        // document.getElementById("cloud").style.height ="400px";
        // document.getElementById("cloud").style.width ="140px";
        document.body.style.backgroundColor = "#2aca3e";
    }

    if(playerScore > 250){
        document.body.style.background = "#7e4c74";
        document.getElementById("villian").srcc = "none";
    }
    if(playerScore > 300){
        document.body.style.background = "#fc6058";
        
        document.getElementById("cloud").src = "./character/mars.png.png";
            document.getElementById("cloud").style.width = "10%";
        document.getElementById("running-naruto").src = "./character/character.gif";

       
        // document.getElementsByName("villian").src = "invisible.gif";
       
    }

    // Storing The High Score if it is greater then The player Score
    if(playerScore < gethighscore){
        showhighScore();
    }

    else{
        localStorage.setItem("highscore", playerScore);
    }
  
}
// Calling The Show High Score function
showhighScore();

// Entry Point of our game when any key is pressed
document.addEventListener("keydown" , (e)=>{
    // Making the game over text not visible
    over.style.display = "none";

    // Starting the game when the space bar is pressed
    if(e.key == " "){
        start_msg.style.display = "none";
        running.style.display = "block";
        start.style.display = "none";
        cloud.style.animation = "cloud 20s linear infinite";
        road.style.animation = "road 1.5s linear infinite";
        cactus.style.animation = "cactus 1.8s linear infinite";
        showhighScore();
        interval = setInterval(scoreCounter, 200);
        
 }
    if(e.key == "ArrowUp"){
        if(running.classList != "jump"){
            running.classList.add("jump");
            setTimeout(() => {
                running.classList.remove("jump");
            }, 500);
        }
    }
})


//'Game Over' if 'Character' hit The 'Block'

let result = setInterval(() => {
    let running_bottom = parseInt(getComputedStyle(running).getPropertyValue("bottom"));
    //    console.log("dinoBottom" + dinoBottom);

    let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));
    
    //    console.log("BlockLeft" + blockLeft);

    if (running_bottom <= 60 && cactusLeft >= 20 && cactusLeft <= 145) {
            //    console.log("Game Over");

        over.style.display = "block";
        running.style.display = "none";
        start.style.display = "block";
        cloud.style.animation = "none";
        road.style.animation = "none";
        cactus.style.animation = "none";
        
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
