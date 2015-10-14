(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $location) {
            
            $scope.onLogin = function () {
                $location.url("/admin/niranjan");
            }
    })
})();