var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope, $http) {
    $scope.cities = []

    $scope.onup = function(form) {
        console.log(form)
        let url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=" + form
        $http.get(url).then(function(response) {
            console.log(response)
            $scope.cities = response['data']
        });

        let gitUrl = "https://api.github.com/users/murdo25"
        $http.get(gitUrl).then(function(response) {
            $scope.gitstuff = response
        });
    }

    $scope.test = "hissssss"

    //http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=Alberton

});
