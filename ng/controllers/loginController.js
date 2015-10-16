(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http, loginService, $location) {
        $scope.account = {
            defunct: false,
            authorization: "niranjan_awati",
            password:"41993"
        };
    })
})(); 