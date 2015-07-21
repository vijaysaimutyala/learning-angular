(function () {
    //iffe - immediately invoked function expression
    var userService = angular.module("myApp").service("userService", function ($q, $http, $timeout) {
        return {
            getUsers: function () {
                var deferred = $q.defer();

                var result =[
                    { email: "niranjan_awati", id: 41993, role: "manager" },
                    { email: "rahul_nair09", id: 1, role: "manager" },
                    { email: "pramod_prajapati", id: 2, role: "manager" },
                    { email: "ish_pandey", id: 4, role: "manager" },
                ];

                //is on another thread
                $timeout(function () {
                    deferred.resolve(result);
                }, 2500)
                //this is the main thread
                return deferred.promise;

            }
        }
    })
})();