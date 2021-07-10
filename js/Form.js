class Form{
    constructor(){
       
    }
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        
    }

    display(){
       this.title = createElement('h1');
       this.title.html("ROCK PAPER SCISSORS");
       this.title.position(450, 30);

       this.input = createInput("NAME");
       this.input.position(350, 200);
       
       this.button = createButton('START');
       this.button.position(500, 300);
    
       this.reset = createButton('reset');
       this.reset.position(500, 650);
       
        this.button.mousePressed(()=>{
            
            logo1 = createSprite(100, 100);
            logo1.addImage(lg);
            logo1.scale = 0.15;
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            textSize(30);
            text (player.name , 600, 150);
            this.Cbutton = createButton('Play with Computer');
            this.Cbutton.position(600, 200);
            this.Cbutton.mousePressed(() => {
               this.Cbutton.hide();
               this.Pbutton.hide();
               game.computer();
            });
            
            this.Pbutton = createButton('Battle Mode');
            this.Pbutton.position(600, 250);
            this.Pbutton.mousePressed(() =>{
                this.Pbutton.hide();
                this.Cbutton.hide();
                playerCount+=1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);
                if(playerCount === 2){
                    game.update(1); 
                }else if(playerCount === 1){
                   textSize(30);
                   text("Waiting for Player...", 600, 450);
                }
            })
            

        });
    
            this.reset.mousePressed(()=>{
                player.updateCount(0);
                game.update(0);
    
                var playerInfoRef = database.ref('players');
                playerInfoRef.remove();
            });

    }
}



