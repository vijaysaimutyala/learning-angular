(function () {
    var adminController = angular.module("myApp").controller("adminController",
        function ($scope, $routeParams) {
        console.log("we are inside the admin controller");
        $scope.username = $routeParams.username

    })
})();