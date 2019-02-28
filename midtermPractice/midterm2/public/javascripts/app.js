angular.module('shop', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.items = [];
            $scope.cart = [];
            $scope.getAll = function() {
                return $http.get('/shopping').success(function(data) {
                    angular.copy(data, $scope.items);
                });
            };
            $scope.getAll();

            $scope.create = function(item) {
                return $http.post('/shopping', item).success(function(data) {
                    $scope.items.push(data);
                });
            };

            $scope.submitCart = function() {
                console.log("In submitCart");
                $scope.cart = []
                angular.forEach($scope.items, function(value, key) {
                    console.log(value)
                    if (value.selected) {
                        $scope.upvote(value);
                        $scope.cart.push(value);
                    }
                });
            }

            $scope.upvote = function(item) {
                return $http.put('/shopping/' + item._id + '/upvote')
                    .success(function(data) {
                        console.log("upvote worked");
                        item.upvotes += 1;
                    });
            };

            $scope.addItem = function() {
                console.log("name", $scope.name)
                console.log("price", $scope.price)
                console.log("url", $scope.url)

                // var newObj = { Name: $scope.formContent, orders: 0 };

                var newObj = {
                    Name: $scope.name,
                    Price: $scope.price,
                    Picture: $scope.url,
                    orders: 0
                };

                $scope.create(newObj);
                $scope.formContent = '';
            }

            $scope.incrementUpvotes = function(item) {
                $scope.upvote(item);
            };

            $scope.delete = function(item) {
                console.log("Deleting Name " + item.Name + " ID " + item._id);
                $http.delete('/shopping/' + item._id)
                    .success(function(data) {
                        console.log("delete worked");
                    });
                $scope.getAll();
            };
        }
    ]);
