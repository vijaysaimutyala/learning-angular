(function () {
    var myRoutes = angular.module("myApp").config(function ($routeProvider) {
        $routeProvider
        .when("/login", { templateUrl: "/ng/views/login.html", controller: "loginController" })
        .otherwise("/login")
    })
})();