
function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.backGround = new Background(this);
  this.player = new Player(this);

  this.x = 0;


}

Game.prototype.start = function(){

  this.interval = setInterval(function(){
    this.clear();
    this.draw();
  
    
  }.bind(this),1000/60)
}

Game.prototype.draw = function(){
  this.backGround.draw();
  this.backGround.move();
  this.player.drawPlayer();
  
}

Game.prototype.clear = function(){
  this.ctx.clearRect(0,0,this.canvas.clientWidth,this.canvas.height);
}