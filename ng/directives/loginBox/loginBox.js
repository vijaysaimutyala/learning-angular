(function () {
    var loginBox = angular.module("myApp").directive("loginBox", function () {
        return {
            //this is how the directive would manifest itself
            restrict: "E",
            replace: true,
            templateUrl: "/ng/directives/loginBox/loginBox.html",
            scope:true,
            controller: function ($scope, loginService, $location) {
                $scope.login = {
                    username: "",
                    password: ""
                };
                $scope.awaitingServer = false;

                $scope.attemptLogin = function () {
                    $scope.awaitingServer = true;
                    loginService.login($scope.login).then(function (data) {
                        //this is where it lands up in the resolve condition
                        console.log("this is from inside the controller");
                        console.log(data);
                        $scope.awaitingServer = false;
                        loginService.loggedInUser = data;
                        $location.url("/admin")
                    }, function (data) {
                        //this is where it lands up in the rejection case
                        console.log("this is from inside the controller");
                        console.log(data);
                        $scope.awaitingServer = false;
                    });
                }
            }
            
        }
    })
})();