var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function () {
    var Avengers = {};
Avengers.cast = [
    {
        name:      'Ken',
        character: 'knight'

    },
    {
        name:      'Denis',
        character: 'monster'

    },
    {
        name:      'Mishok',
        character: 'bomzh'

    },
    {
        name:      'Sasha',
        character: 'soldier'

    }
];
return Avengers;
});

myApp.controller('AvengersCtrl',function($scope, Avengers) {
    $scope.avengers = Avengers;
});