(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope) {
        $scope.login = {
            username: "",
            password:""
        };
        $scope.attemptLogin = function () {
            console.log("we are about to login with the credentials ..");
            console.log($scope.login.username);
            console.log($scope.login.password);
        }
    })
})(); 