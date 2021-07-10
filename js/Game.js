class Game {
    constructor(){
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
    }
  
    play(){
      form.hide();

      background("pink");

      for(var i = 0 ; i < 900; i = i+ 20){
        line(600, i, 600, i+10);
      }

      if(player.index === 1){
        rock = createButton("ROCK");
        rock.position(50, 500);
        rock.mousePressed(rockFunction);

        paper = createButton("PAPER");
        paper.position(50, 550);
        paper.mousePressed(paperFunction);

        sci = createButton("SCISSORS");
        sci.position(50, 600);
        sci.mousePressed(sciFunction);

        var rk1 = createButton("ROCK");
        rk1.position(1100, 500);

        var pp1 = createButton("PAPER");
        pp1.position(1100, 550);

        var si1= createButton("SCISSORS");
        si1.position(1100, 600);
      }

      if(player.index === 2){
        rock1 = createButton("ROCK");
        rock1.position(1100, 500);
        rock1.mousePressed(rock1Function);

        paper1 = createButton("PAPER");
        paper1.position(1100, 550);
        paper1.mousePressed(paper1Function);

        sci1= createButton("SCISSORS");
        sci1.position(1100, 600);
        sci1.mousePressed(sci1Function);

        var rk = createButton("ROCK");
        rk.position(50, 500);

        var pp = createButton("PAPER");
        pp.position(50, 550);

        var si = createButton("SCISSORS");
        si.position(50, 600);
      }

      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        var index = 0;
        
        for( var plr in allPlayers){
          index = index + 1;
          
          
        } 
        if(player.index === 1){
          if(allPlayers.player2.choice !== null){
          if(allPlayers.player2.choice === "rock1"){
            if(pcheck1 === true || scheck1 === true || rcheck1 === true){
              if(pcheck1 === true){
                  phand1.visible = false;
                  pcheck1 = false;
              }
              if(scheck1 === true){
                  shand1.visible = false;
                  scheck1 = false;
              }
              if(rcheck1 === true){
                  rhand1.visible = false;
                  rcheck1 = false;
              }
              }
              rcheck1 = true;
              rhand1 = createSprite(740, 540, 100, 100);
              rhand1.addImage(rock1Img);
            }
            else if(allPlayers.player2.choice === "paper1"){
              if(pcheck1 === true || scheck1 === true || rcheck1 === true){
                if(pcheck1 === true){
                    phand1.visible = false;
                    pcheck1 = false;
                }
                if(scheck1 === true){
                    shand1.visible = false;
                    scheck1 = false;
                }
                if(rcheck1 === true){
                    rhand1.visible = false;
                    rcheck1 = false;
                }
                }
                pcheck1 = true;
              phand1 = createSprite(740, 540, 100, 100);
              phand1.addImage(paper1Img);
            }
            else if(allPlayers.player2.choice === "sci1"){
              if(pcheck1 === true || scheck1 === true || scheck1 === true){
                if(pcheck1 === true){
                    phand1.visible = false;
                    pcheck1 = false;
                }
                if(scheck1 === true){
                    shand1.visible = false;
                    scheck1 = false;
                }
                if(rcheck1 === true){
                    rhand1.visible = false;
                    rcheck1 = false;
                }
                }
                scheck1 = true;
              shand1 = createSprite(740, 540, 100, 100);
              shand1.addImage(sci1Img);
            }
          }
        }
        if(player.index === 2){
          if(allPlayers.player1.choice !== null){
          if(allPlayers.player1.choice === "rock"){
            if(pcheck === true || scheck === true || rcheck === true){
              if(pcheck === true){
                  phand.visible = false;
                  pcheck = false;
              }
              if(scheck === true){
                  shand.visible = false;
                  scheck = false;
              }
              if(rcheck === true){
                  rhand.visible = false;
                  rcheck = false;
              }
              }
              rcheck = true;
              rhand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
              rhand.addImage(rockImg);
            }
            else if(allPlayers.player1.choice === "paper"){
              if(pcheck === true || scheck === true || rcheck === true){
                if(pcheck === true){
                    phand.visible = false;
                    pcheck = false;
                }
                if(scheck === true){
                    shand.visible = false;
                    scheck = false;
                }
                if(rcheck === true){
                    rhand.visible = false;
                    rcheck = false;
                }
                }
                pcheck = true;
              phand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
              phand.addImage(paperImg);
            }
            else if(allPlayers.player1.choice === "sci"){
              if(pcheck === true || scheck === true || scheck === true){
                if(pcheck === true){
                    phand.visible = false;
                    pcheck = false;
                }
                if(scheck === true){
                    shand.visible = false;
                    scheck = false;
                }
                if(rcheck === true){
                    rhand.visible = false;
                    rcheck = false;
                }
                }
                scheck = true;
              shand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
              shand.addImage(sciImg);
            }
          }
        }
          
          if(allPlayers.player1.choice !== null && allPlayers.player2.choice !== null){
            if(allPlayers.player1.choice === "rock" && allPlayers.player2.choice === "sci1"){
              allPlayers.player1.score += 1;
              player.update();
            }
          }
          if(allPlayers.player1.choice !== null && allPlayers.player2.choice !== null){
            if(allPlayers.player1.choice === "sci" && allPlayers.player2.choice === "paper1"){
              allPlayers.player1.score += 1;
              player.update();
            }
          }
        
          textSize(30);
          text (allPlayers.player1.name , 300, 120);
          textSize(20);
          text("Score : " + allPlayers.player1.score, 300, 150);
  
          textSize(30);
          text (allPlayers.player2.name, 900, 120);
          textSize(20);
          text("Score : " + allPlayers.player2.score, 900, 150);
        }
         

      drawSprites();
      }
  
    end(){
      console.log("GAME ENDED");
    }

    computer(){
      background("pink");

      for(var i = 0 ; i < 900; i = i+ 20){
        line(600, i, 600, i+10);
      }

        rock2 = createButton("ROCK");
        rock2.position(1100, 500);
        rock2.mousePressed(
          rock2function
        );

        paper2 = createButton("PAPER");
        paper2.position(1100, 550);
        paper2.mousePressed(
          paper2function
        );

        sci2= createButton("SCISSORS");
        sci2.position(1100, 600);
        sci2.mousePressed(
          sci2function
        );

        var r11 = createButton("ROCK");
        r11.position(50, 500);

        var p11 = createButton("PAPER");
        p11.position(50, 550);

        var s11 = createButton("SCISSORS");
        s11.position(50, 600);

        textSize(30);
        fill("black");
        text(Math.round(random(0, 10000)), 250, 120);

        textSize(30);
        fill("black");
        text(player.name, 900, 120);
        
        textSize(20);
        fill("black");
        text("Score : " + Cscore, 250, 150);

        textSize(20);
        fill("black");
        text("Score : " + Pscore, 900, 150);
        
    }
   
    
} 
