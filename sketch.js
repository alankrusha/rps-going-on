var canvas;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var Pscore = 0, Cscore = 0;

var  Rhand, Phand, Shand; //hands
var  Rhand1, Phand1, Shand1; //hands1

var rhand, phand, shand; //Hands
var rhand1, phand1, shand1; //Hands1

var rock, paper, sci // buttons
var rock1, paper1, sci1; // buttons1
var rock2, paper2, sci2; // button2

var r2check = false; //-
var p2check = false; //-Check2
var s2check = false; //-

var images;
var rand ;

var r2hand, p2hand, s2hand; //-Hands2

var rockImg, paperImg,sciImg // images
var rock1Img, paper1Img, sci1Img; // images1

var form, player, game;
var logo, logo1,  lg, Play, youL, youLose, youW, youWin, battleMode, battleM;

var Rcheck = false;  //-
var Pcheck = false;  //- Check
var Scheck = false;  //-

var Rcheck1 = false;  //-
var Pcheck1 = false;  //- Check1
var Scheck1 = false;  //-

var rcheck = false;  //-
var pcheck = false;  //- check
var scheck = false;  //-

var rcheck1 = false;  //-
var pcheck1 = false;  //- check1
var scheck1 = false;  //-

function preload(){
    rockImg = loadImage("images/rock1.png");      //-
    paperImg = loadImage("images/paper1.png");    //-  load Images
    sciImg = loadImage("images/sci1.png");        //-
    
    rock1Img = loadImage("images/rock2.png");     //-
    paper1Img = loadImage("images/paper2.png");   //-  load Images1
    sci1Img = loadImage("images/sci2.png");       //-

    backg = loadImage("images/bg.png");
    lg = loadImage("images/game logo.png");
    Play = loadImage("images/play.png");
    youL = loadImage("images/you lose.png");
    youW = loadImage("images/you Win.png");
    battleM = loadImage("images/battle mode.png");
    Rtry = loadImage("images/restart.png");
}

function setup (){
   canvas = createCanvas(1200, 700);
   background("pink");
   database = firebase.database();
   
   game = new Game();
   game.getState();
   game.start();
  
   
}

function draw(){
    
    if(gameState === 1 && player.index !== null){
       clear();
       game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
    
    

    drawSprites();
}
//buttons functions
function rockFunction(){
    
    if(Pcheck === true || Scheck === true || Rcheck === true){
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        }
        Rcheck = true;
        Rhand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Rhand.addImage(rockImg);
        player.choice = "rock";
        player.update();
    }
function paperFunction(){
    
    if(Rcheck === true || Scheck === true || Pcheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }  
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }  
        }
        Pcheck =  true;
        Phand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Phand.addImage(paperImg);
        player.choice = "paper";
        player.update();
    }  
function sciFunction(){
    
    if(Rcheck === true || Pcheck === true || Scheck === true){
        if(Rcheck === true){
            Rhand.visible = false;
            Rcheck = false;
        }
        if(Pcheck === true){
            Phand.visible = false;
            Pcheck = false;
        }   
        if(Scheck === true){
            Shand.visible = false;
            Scheck = false;
        }   
        }
        Scheck = true;
        Shand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        Shand.addImage(sciImg);
        player.choice = "sci";
        player.update();
    } 
//buttons1 functions
function rock1Function(){

    if(Pcheck1 === true || Scheck1 === true || Rcheck1 === true){
        if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
        }
        Rcheck1 = true;
        Rhand1 = createSprite(740, 540, 100, 100);
        Rhand1.addImage(rock1Img); 
        player.choice = "rock1";
        player.update();  
    }     
function paper1Function(){
    
    if(Rcheck1 === true || Scheck1 === true || Pcheck1 === true){
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }   
        if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }  
        }
        Pcheck1 =  true;
        Phand1 = createSprite(740, 540, 100, 100);
        Phand1.addImage(paper1Img);
        player.choice = "paper1";
        player.update();
    }     
function sci1Function(){ 
    
    if(Rcheck1 === true || Pcheck1 === true || Scheck1 === true){
        if(Rcheck1 === true){
            Rhand1.visible = false;
            Rcheck1 = false;
        }
        if(Pcheck1 === true){
            Phand1.visible = false;
            Pcheck1 = false;
        }   
        if(Scheck1 === true){
            Shand1.visible = false;
            Scheck1 = false;
        }  
        }
        Scheck1 = true;
        Shand1 = createSprite(740, 540, 100, 100);
        Shand1.addImage(sci1Img);
        player.choice = "sci1";
        player.update();
    }
function rock2function(){
    if(r2check === true || p2check === true || s2check === true){
        if(r2check === true){
            r2hand.visible = false;
            r2check = false;
            
        }
        if(p2check === true){
            p2hand.visible = false;
            p2check = false;
            
        }
        if(s2check === true){
            s2hand.visible = false;
            s2check = false;
            
        }
        }
        r2check = true;
        r2hand = createSprite(740, 520, 100, 100);
        r2hand.addImage(rock1Img);
        rand = Math.round(random(1, 3));
        Chand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        switch(rand){
            case 1: Chand.addImage(rockImg);
                    break;
            case 2: Chand.addImage(paperImg);
                    break;
            case 3: Chand.addImage(sciImg);
            default: break;
        }
}
function paper2function(){
    if(r2check === true || p2check === true || s2check === true){
        if(r2check === true){
            //r2hand.shapeColor = "black";
            console.log("visible");
            r2hand.destroy();
            r2check = false;
            
        }
        if(p2check === true){
            p2hand.visible = false;
            p2check = false;
            Chand1.x = 100;
            Chand1.y = 100;
        }
        if(s2check === true){
            s2hand.visible = false;
            s2check = false;
            
        }
        }
        p2check = true;
        p2hand = createSprite(740, 540, 100, 100);
        p2hand.addImage(paper1Img);
        rand = Math.round(random(1, 3));
        Chand = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        switch(rand){
            case 1: Chand.addImage(rockImg);
                    break;
            case 2: Chand.addImage(paperImg);
                    break;
            case 3: Chand.addImage(sciImg);
            default: break;
        }
}   
function sci2function(){
    if(r2check === true || p2check === true || s2check === true){
        if(r2check === true){
            r2hand.visible = false;
            r2check = false;
            
        }
        if(p2check === true){
            p2hand.visible = false;
            p2check = false;
           
        }
        if(s2check === true){
            s2hand.visible = false;
            s2check = false;
    
        }
        }
        s2check = true;
        s2hand = createSprite(740, 540, 100, 100);
        s2hand.addImage(sci1Img);
        rand = Math.round(random(1, 3));
        Chand2 = createSprite(displayWidth/2 - 500, displayHeight/2, 100, 100);
        switch(rand){
            case 1: Chand.addImage(rockImg);
                    break;
            case 2: Chand.addImage(paperImg);
                    break;
            case 3: Chand.addImage(sciImg);
            default: break;
        }
}
