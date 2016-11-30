There is a server component to this application simply to avoid cross origin domain errors (as I used angularjs for this)

Main Technologies / Frameworks used:
    AngularJS - Makes it logical to build a MVC application
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

I unfortunately did not have time to build unit tests, I did do a fair amount of testing throughout this project and it seems to work fairly well.
If you would like me to prepare some unit tests, I would be happy to do so and can send them to you tomorrow.

I wish I had more time to spend on it, but I think you should have a decent understanding of my coding style after this sample.

If you have any questions or concerns about my solution, please feel free to contact me. 

mkhalil@purdue.edu
805-208-9791

Thanks for reviewing this and I hope it makes sense to you!

Michael Khalil
    