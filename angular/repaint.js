var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope, $http) {


    $scope.test = "helloWorld"


    $scope.posts = [{ title: "Post 1", upvotes: 0 }, { title: "Post 2", upvotes: 12 }, { title: "Post 3", upvotes: 42 }, { title: "Post 4", upvotes: -3 }]

    $scope.addPost = function() {
        $scope.posts.push({
            title: $scope.formContent,
            upvotes: 0

        })

    }

});
