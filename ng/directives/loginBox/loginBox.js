(function () {
    var loginBox = angular.module("myApp").directive("loginBox", function () {
        return {
            //this is how the directive would manifest itself
            transclude:true,
            restrict: "E",
            replace: false,
            templateUrl: "/ng/directives/loginBox/loginBox.html",
            scope: {
                acc: "=",
                disableacc:"&"
            },
            controller: function ($scope, loginService, $location) {
                console.log($scope);
                console.log($scope.acc);
                $scope.login = {
                    username: "",
                    password: ""
                };
                $scope.awaitingServer = false;

                $scope.attemptLogin = function () {
                    console.log($scope.acc);
                    console.log("this was from within the directive");
                    //do not try this at home.. dangerous, i shall let you know what went wrong here.. 
                    $scope.disableacc({ message: "this is just a plain message" });
                    //$scope.awaitingServer = true;
                    //loginService.login($scope.login).then(function (data) {
                    //    //this is where it lands up in the resolve condition
                    //    console.log("this is from inside the controller");
                    //    console.log(data);
                    //    $scope.awaitingServer = false;
                    //    loginService.loggedInUser = data;
                    //    $location.url("/admin")
                    //}, function (data) {
                    //    //this is where it lands up in the rejection case
                    //    console.log("this is from inside the controller");
                    //    console.log(data);
                    //    $scope.awaitingServer = false;
                    //});
                }
            }
            
        }
    })
})();