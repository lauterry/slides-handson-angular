var angularRevealApp = angular.module('angularRevealApp', []);

angularRevealApp.controller('greetingController', function($scope){
    $scope.greeting = 'Hello World';
});