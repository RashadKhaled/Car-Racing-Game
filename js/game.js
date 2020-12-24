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
        car1.addImage("car1.image", car1Image)
        car2=createSprite(300,200)
        car2.addImage("car2.image", car2Image)
        car3=createSprite(500,200)
        car3.addImage("car3.image", car3Image)
        car4=createSprite(700,200)
        car4.addImage("car4.image", car4Image)
        carArray=[car1,car2,car3,car4]
    }
    play(){
    form.hide()
    Player.getAllPlayerInformation()
    background("orange")
    image(trackImage, 0, -displayHeight*4,displayWidth,displayHeight*5)
    if(allplayerInfo!=null){
        var yPos=0;
        var xPos=175;
        var arrayPos=0;
        for(var key in allplayerInfo){
            xPos=xPos+200
            arrayPos=arrayPos+1
            yPos=displayHeight-allplayerInfo[key].distance
            carArray[arrayPos-1].x=xPos
            carArray[arrayPos-1].y=yPos
            if(arrayPos === player.playerNumber){
              carArray[arrayPos-1].shapeColor="red" 
              camera.position.x=displayWidth/2
              camera.position.y=carArray[arrayPos-1].y 
            }
            else{
                carArray[arrayPos-1].shapeColor="black"

        }    
    }
        if(keyDown("up")&& player.playerNumber!= null){
            player.playerDistance=player.playerDistance+20
            player.updatePlayer()
        }
        if(player.playerDistance==3800){
            gameState=2
            rank=rank+1
            player.rank=rank
            player.updatePlayer()
            this.updategameState(2)
        }
    }
    drawSprites()

}
end(){
    alert("Game Over Your Rank Is"+ player.rank)
}
}
