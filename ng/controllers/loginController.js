(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http, loginService) {
        $scope.login = {
            username: "",
            password:""
        };
        $scope.attemptLogin = function () {
            loginService.login($scope.login);
        }
    })
})(); 