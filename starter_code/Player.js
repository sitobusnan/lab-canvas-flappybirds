// Faby
var img = new Image();
img.src = "./images/flappy.png"

function Player (game){
  this.game = game;
  this.width = 30;
  this.height = 30;
  this.speedx = 0;
  this.speedy = 1;
  this.gravity = 0.1;
  this.gravitySpeed = 1;
}

Player.prototype.listener = function(){
 
}

Player.prototype.newSpeed = function(){
  
}

Player.prototype.drawPlayer = function(){

  this.game.ctx.drawImage(img, 100, 200, this.width, this.height);
  console.log("kkk")
}