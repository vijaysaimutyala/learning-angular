(function () {
    var adminController = angular.module("myApp").controller("adminController", function (loginService, $scope) {
        console.log("we are inside the admin controller");
        $scope.user = loginService.loggedInUser;
        $scope.reportees = loginService.reportees;
        $scope.removeOneReportee = function () {
            $scope.reportees = $scope.reportees.splice(0, 5);
        }
    })
})();