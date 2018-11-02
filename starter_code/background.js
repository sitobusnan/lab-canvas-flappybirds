// Background

function Background (game){

    this.game = game;
    this.img = new Image();
    this.img.src = "./images/bg.png";

    this.x = 0;
    this.y = 0;

    this.dx = 5;


    Background.prototype.draw = function (){
      
      this.game.ctx.drawImage(this.img,this.x, this.y, this.game.canvas.width,this.game.canvas.height);
      this.game.ctx.drawImage(this.img,this.x + this.game.canvas.width, this.y, this.game.canvas.width,this.game.canvas.height);
   
    };

    Background.prototype.move = function(){
      this.x -= this.dx;
      if ( this.x < -this.game.canvas.width){
        this.x = 0;
      }
    }

    // var backgroundImage = {
    //   img: img,
    //   x: 0,
    //   speed: -1,

    //   move: function() {
    //     this.x += this.speed;
    //     this.x %= this.canvas.width;
    //   },

    //   draw: function() {
    //     ctx.drawImage(this.img, this.x, 0);
    //     if (this.speed < 0) {
    //       ctx.drawImage(this.img, this.x + canvas.width, 0);
    //     } else {
    //       ctx.drawImage(this.img, this.x - this.img.width, 0);
    //     }
    //   }
    // };

    // function updateCanvas() {
    //   backgroundImage.move();

    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   backgroundImage.draw();

    //   requestAnimationFrame(updateCanvas);
    // }

    // // start calling updateCanvas once the image is loaded
    // img.onload = updateCanvas;
  




}