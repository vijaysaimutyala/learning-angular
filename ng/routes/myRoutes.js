(function () {
    var myRoutes = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "" })
        .when("/admin", { templateUrl: "/ng/views/admin.html", controller: "adminController" })
        .otherwise("/login")
    })
})();