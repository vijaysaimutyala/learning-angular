
(function () {
    var loginBox = angular.module("myApp").directive("loginBox", function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "ng/templates/loginBox.html",
            scope: false,
            controller: function ($scope, $log) {
                $log.debug("We are now inside the controller of the loginBox directive");
                $scope.message = "We are making our first directive";
                
            }
        }
    })
})();