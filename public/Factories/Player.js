app.factory('Player', function() {

    // constructor
    var Player = function(name,type,marker,wins) {
        this.name = name;
        this.type = type;
        this.marker = marker;
        this.wins = 0;
    };

    //AI function, just picks a random spot that is still available in the game
     Player.prototype.pickSpot = function(game) {     
         availablePostions = [];
         for(var i = 0; i < game.boardSize; i++) {
             for(var j = 0; j < game.boardSize; j++) {
                 if (game.board[i][j] === ""){
                     availablePostions.push({row : i, col : j});
                 }
             }
         }

         var position = availablePostions[Math.floor(Math.random()*availablePostions.length)];
         
         if (position != undefined){
            game.updateBoard(position.row,position.col);
         }
     };

    return Player;
})