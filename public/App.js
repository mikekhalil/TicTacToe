var app = angular.module('tictactoe',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'public/Components/Game/Game.html',
    controller  : 'GameController'
  })

  .otherwise({redirectTo: '/'});
});