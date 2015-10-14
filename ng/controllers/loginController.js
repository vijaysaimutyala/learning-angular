(function () {
    var loginController = angular.module("myApp").controller("loginController", function ($scope, $http) {
        $scope.login = {
            username: "",
            password:""
        };
        $scope.attemptLogin = function () {
            var url = "http://localhost:9090/webapi/login/authenticate"
            $http.post(url, $scope.login)
                .then(function (response) {
                    //this is the function that is executed when you have success from the service
                    console.log("we have successful resposne from the service");
                    console.log(response.data);
                    console.log(response.status);
            }, function (response) {
                //this is the function when you have error from the service
                console.log("we have unsuccessful resposne from the service");
                console.log(response.status);
                console.log(response.data.ExceptionMessage);
            });
            
            console.log("hi there this is from inside of the controller");

        }
    })
})(); 