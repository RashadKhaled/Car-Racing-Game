var gameState, database, form, game, player, playerCount,allplayerInfo, car1, car2, car3, car4, carArray
gameState=0
playerCount=0
function preload(){
    
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
}