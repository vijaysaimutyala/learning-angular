(function () {
    var myRoute = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/", { templateUrl: "ng/views/login.html", controller: "mainController" })
        .when("/reportees", { templateUrl: "ng/views/reportees.html", controller: "reporteesController" })
        .otherwise("/")
    })
})();