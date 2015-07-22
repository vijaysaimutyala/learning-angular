(function () {
    var reporteesController = angular.module("myApp").controller("reporteesController", function ($scope, userService, $routeParams, $log) {
        $scope.reportees = [];
        $log.debug("we are inside the reportees controller");

        userService.getReportees($routeParams.mgrid).then(function (data) {
            $log.debug("Hurray we have the reportees from the server");
            $scope.reportees = data;
            console.log($scope.reportees);
        }, function (data) {
            $log.warn("failed to get the reportees for the manager : " + $routeParams.mgrid);
        });
    })
})();