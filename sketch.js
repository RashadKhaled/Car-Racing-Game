var gameState, database, form, game, player, playerCount,allplayerInfo, car1, car2, car3, car4, carArray
var car1Image, car2Image, car3Image, car4Image, trackImage, rank=0
gameState=0
playerCount=0
function preload(){
    car1Image=loadImage("images/car1.png");
    car2Image=loadImage("images/car2.png");
    car3Image=loadImage("images/car3.png");
    car4Image=loadImage("images/car4.png");
    trackImage=loadImage("images/track.jpg");
}

function setup(){
createCanvas(displayWidth, displayHeight)
database=firebase.database()
game=new Game()
game.start()

}


function draw(){
if(playerCount==4){
    gameState=1
    game.updategameState(1)

}if(gameState==1){
    game.play()
}
if(gameState==2){
    game.end()
}
}
