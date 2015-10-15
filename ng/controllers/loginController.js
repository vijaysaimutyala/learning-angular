(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http, loginService) {
        $scope.login = {
            username: "",
            password:""
        };
        $scope.awaitingServer = false;

        $scope.attemptLogin = function () {
            $scope.awaitingServer = true;
            loginService.login($scope.login).then(function (data) {
                //this is where it lands up in the resolve condition
                console.log("this is from inside the controller");
                console.log(data);
                $scope.awaitingServer = false;
            }, function (data) {
                //this is where it lands up in the rejection case
                console.log("this is from inside the controller");
                console.log(data);
                $scope.awaitingServer = false;
            });
        }
    })
})(); 