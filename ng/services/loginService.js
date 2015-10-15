(function () {
    var loginService = angular.module("myApp").service("loginService", function ($http, $q, $timeout) {
        this.baseUrl = "http://vpunplepun2-01:8081/webapi";
        this.loginUrl = function () {
            return this.baseUrl + "/login/authenticate"
        }
        this.loggedInUser = {};
        this.login = function (login) {
            //this is wehre the story becomes ineresting
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(login);
            }, 2500)

            //$http.post(this.loginUrl(), login)
            //   .then(function (response) {
            //       //this is the function that is executed when you have success from the service
            //       console.log("we have successful resposne from the service");
            //       console.log(response.data);
            //       console.log(response.status);
            //       deferred.resolve(response);
            //   }, function (response) {
            //       //this is the function when you have error from the service
            //       console.log("we have unsuccessful resposne from the service");
            //       console.log(response.status);
            //       console.log(response.data.ExceptionMessage);
            //       deferred.reject(response);
            //   });
            //this is the place where it return .. 
            return deferred.promise;
        }
    })
})();