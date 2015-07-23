(function () {
    var reporteesController = angular.module("myApp").controller("reporteesController",
        function ($scope, userService, $routeParams, $log, $rootScope, $location) {
            $scope.reportees = [];
            $scope.perPage = 5;
            $scope.currPage = 1;
            $scope.moveToNext = function () {
                $scope.currPage++;
                }
            $log.debug("we are inside the reportees controller");

            if ($rootScope.loggedInUser!=null) {
                userService.getReportees($routeParams.mgrid).then(function (data) {
                    $log.debug("Hurray we have the reportees from the server");
                    $scope.reportees = data;
                    console.log($scope.reportees);
                }, function (data) {
                    $log.warn("failed to get the reportees for the manager : " + $routeParams.mgrid);
                });
            }
            else {
                $log.warn("this is an attempt to login with dirty crednetials .. going back to login page");
                $location.url("/")
            }
    })
})();