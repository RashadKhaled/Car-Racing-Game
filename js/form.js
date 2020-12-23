class Form{
    constructor(){
        this.input= createInput("Enter the Player Name")
        this.button= createButton("Play")
        this.title= createElement("h2","Car Racing Game")
        this.greeting=createElement("h3")
    }
    display(){
       
        this.input.position(displayWidth/2-40, displayHeight/2-80)
        
        this.button.position(displayWidth/2+30, displayHeight/2)
        
        this.title.position(displayWidth/2-50,0)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.playerName= this.input.value()
            playerCount=playerCount+1
            player.playerNumber=playerCount
            player.updatePlayerCount(playerCount)
            player.updatePlayer()
            this.greeting.html("hello"+ player.playerName)
            this.greeting.position(displayWidth/2-70, displayHeight/4)
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}