var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/Index.html');
});

app.listen(3000, function() { 
    console.log('listening on port 3000');
}); 
