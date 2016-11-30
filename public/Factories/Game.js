app.factory('Game', function() {

    var defaultMessage = " has won the round! Click 'New Game' to continue!";
    var tieMessage = "Tie game! Click 'New Game' to continue!";
    // constructor
    var Game = function(players, boardSize) {
       
        this.players = players;           
        this.boardSize = boardSize;
        this.board = new Array(boardSize);
        
        //initialize the board
        for(var i = 0; i < boardSize; i++) {
            this.board[i] = new Array(boardSize).fill("");
        }
        
        this.message = "";          //Display message to help the users
        this.turn = 0;              //index of the current player
        this.inPlay = true;         //game is still in play ( winner hasn't been selected)
    };


    //static function to help determine if there is a winner => returns winner marker (x or o)
    var checkArr = function(arr,size) {
        if(arr[0] === ""){
            //still unitialized
            return false;
        }
        for(var k = 1; k < size; k++) {
            if(arr[k] !== arr[0]){
                return false;
            }
        }
        return arr[0];
    };

    Game.prototype.tieGame = function() {
        //check to see if it was a tie game
        for(var i = 0; i < this.boardSize; i++) {
            for(var j = 0; j < this.boardSize; j++) {
                if(this.board[i][j] === ""){
                    return false;
                }
            }
        }
        return true;
    }

    Game.prototype.checkWinner = function() {
        //check horizontal and vertical possible winners
        for(var i = 0; i < this.boardSize; i++) {
            var row = [],col = [];
            //push row values into flat array and check for winner
            for(var j = 0; j < this.boardSize; j++) {
                row.push(this.board[i][j]);
                col.push(this.board[j][i]);
            }
            var rowResult = checkArr(row,this.boardSize);
            var colResult = checkArr(col,this.boardSize);
            if(rowResult !== false){
                //win within this row
                return rowResult;
            }
            else if(colResult !== false) {
                //win in this column  
                return colResult;
            }
        }

        //check diagnols
        var negativeDiag = [], positiveDiag = [];
        for(var i = 0; i < this.boardSize; i++) {
            negativeDiag.push(this.board[i][i]);
            positiveDiag.push(this.board[i][this.boardSize-i-1]);
        }
        var positiveResult = checkArr(positiveDiag,this.boardSize);
        var negativeResult = checkArr(negativeDiag,this.boardSize);
        if(positiveResult !== false) {
            //win across positive diagonal
            return positiveResult;
        }
        else if(negativeResult !== false) {
            //win accross negative diagnol
            return negativeResult;
        }
        return false;
    }

    //allow ai or human to update the board
    Game.prototype.updateBoard = function(row,col) {

        //check to see if the cell has already been played and if the game is still in play
        if(this.board[row][col] === "") {
            if(this.inPlay) {
                //put the corresponding marker on the cell
                var val = this.players[this.turn].marker;
                this.board[row][col] = val;

                //check to see if there has been a winner
                var winner = this.checkWinner();
                if (winner != false) {
                    if(this.players[0].marker === winner){
                        this.message = this.players[0].name + defaultMessage;
                    }
                    else {
                        this.message = this.players[1].name + defaultMessage;
                    }
                    this.inPlay = false;
                    return;
                }
                //alternate turns
                this.turn = this.turn ? 0 : 1;

                //if it's an AI player, trigger the player object to pick a new spot
                if(this.players[this.turn].type === "ai") {
                    this.players[this.turn].pickSpot(this);
                }
                
            }
        }

        //check to see if all of the cells have been filled
        if(this.tieGame()) {
            this.message = tieMessage;
            this.inPlay = false;
        }
    };

    
    return Game;
})