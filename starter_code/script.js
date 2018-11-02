window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var game = new Game("flappy");
 

  function startGame(ctx){
    game.start();
  }
};
