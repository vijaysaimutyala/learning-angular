(function () {
    var myRoute = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "mainController" })
        .when("/reportees/:mgrid", { templateUrl: "ng/views/reportees.html", controller: "reporteesController" })
        .otherwise("/")
    })
})();