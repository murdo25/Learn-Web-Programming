var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    $scope.names = [];
    $scope.updateMessage = function() {
        $scope.message = 'Hello! ' + $scope.first.charAt(0).toUpperCase() + $scope.first.substr(1, $scope.first.length - 1) +
            ' ' + $scope.last + '!';
        var name = { first: $scope.first, last: $scope.last };
        $scope.names.push(name);

        var newobj = { first: $scope.first, lastt: $scope.last }
    };
});
