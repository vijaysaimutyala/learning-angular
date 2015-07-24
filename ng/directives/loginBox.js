
(function () {
    var loginBox = angular.module("myApp").directive("loginBox", function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "ng/templates/loginBox.html",
            scope: {
                userInfo: "=",
                fnLogin:"&"
            },
            controller: function ($scope, $log) {
                $scope.serverRunning = false;
                $log.debug("We are now inside the controller of the loginBox directive");
                $scope.message = "We are making our first directive";
                
                $scope.$emit("auth-issue");

                $scope.$on("auth-begin", function () {
                    $log.info("we have received the event for the server running");
                    $scope.serverRunning = true;
                })
            }
        }
    })
})();