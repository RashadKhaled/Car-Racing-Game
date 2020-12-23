class Game{
    getgameState(){
    var locationChild= database.ref("gameState")
    locationChild.on("value", function(data){
        gameState=data.val()
    })
    }
    updategameState(state){
    var JSON= {gameState: state}
    var locationChild= database.ref("/")
    locationChild.update(JSON)
    }
    start(){
        if(gameState==0){
            player=new Player()
            player.getPlayerCount()
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        carArray=[car1,car2,car3,car4]
    }
    play(){
    form.hide()
    Player.getAllPlayerInformation()
    background("white")
    if(allplayerInfo!=null){
        var yPos=0;
        var xPos=0;
        var arrayPos=0;
        for(var key in allplayerInfo){
            xPos=xPos+200
            arrayPos=arrayPos+1
            yPos=displayHeight-player.playerDistance
            carArray[arrayPos-1].x=xPos
            carArray[arrayPos-1].y=yPos
            if(arrayPos === player.playerNumber){
              carArray[arrayPos-1].shapeColor="red"  
            }
            else{
                carArray[arrayPos-1].shapeColor="black"

        }    
    }
        if(keyDown("up")&& player.playerNumber!= null){
            player.playerDistance=player.playerDistance+20
            player.updatePlayer()
        }
    }
    drawSprites()

}
}
