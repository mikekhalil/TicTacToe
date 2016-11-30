app.controller('GameController', function($scope, Game,Player) {
  //initialize players and game
  var boardSize = 3;
  var players = [new Player("Player 1","human", "X",0), new Player("Player 2", "human", "O",0)];
  $scope.game = new Game(players, boardSize);

  $scope.newGame = function() {
    //function gets called when user changes the boardsize or changes the player type 
    $scope.game = new Game($scope.game.players, $scope.game.boardSize);
    
    //start game if player 1 is AI
    if($scope.game.players[0].type =="ai") {
      $scope.game.players[0].pickSpot($scope.game);
    }
  };

  


});