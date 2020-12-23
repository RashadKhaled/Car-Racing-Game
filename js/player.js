class Player{
    constructor(){
        this.playerName=null
        this.playerNumber=null
        this.playerDistance=0


    }
getPlayerCount(){
    var locationChild= database.ref("playerCount")
    locationChild.on("value", function(data){
        playerCount=data.val()
        
    })
}
updatePlayerCount(count){
var JSON={playerCount:count}
var locationChild=database.ref("/")
locationChild.update(JSON)
}
updatePlayer(){
var playerName="players/player"+ this.playerNumber
var JSON={playerName:this.playerName, distance:this.playerDistance}
var locationChild=database.ref(playerName)
locationChild.update(JSON)
}
static getAllPlayerInformation(){
var locationChild= database.ref("players")
locationChild.on("value", function(data){
    allplayerInfo=data.val()
})

}
}