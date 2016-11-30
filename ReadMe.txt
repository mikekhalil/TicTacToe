There is a server component to this application simply to avoid cross origin domain errors (as I used angularjs for this)

Main Technologies / Frameworks used:
    AngularJS - Gotta have that MVC
    Materialize - CSS library

So to start the server you have 2 options.
    1)  run npm install
        then run node Server.js

    2)  run npm start (which essentially does the same thing)

    Then you can access application through http://localhost:3000/


The code worth reviewing that has most of the logic is within the files
    /public/Factories/Game.js
    /public/Factories/Player.js
    /public/Components/GameController.js
    /public/Components/Game.html

These files are where I use the Model-View-Controller paradigm in order to make the TicTacToe game. 

I wish I had more time to spend on it, but I think you should have a decent understanding of my coding style after this sample.

Includes 3x3, 4x4, 5x5 board. Supports multiplayer or play against a bot (picks random position) or have a bot play against a bot.
    
