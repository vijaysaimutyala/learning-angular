(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http, loginService, $location) {
        $scope.account = {
            defunct: false,
            authorization: "niranjan_awati",
            password:"41993"
        };
        $scope.disableAccount = function (message) {
            console.log("we have reached the higher controller and we are ready to disable the account");
            console.log(message);
        }
    })
})(); 