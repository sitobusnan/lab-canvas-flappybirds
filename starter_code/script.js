window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var game = new Game();

  function startGame(){
    game.start();
  }
};
