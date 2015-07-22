(function () {
    //iffe - immediately invoked function expression
    var userService = angular.module("myApp").service("userService", function ($q,
        $http, $timeout, valueProvider) {
        return {
            getUsers: function () {
                var deferred = $q.defer();

                var result = valueProvider.userSet;

                //is on another thread
                $timeout(function () {
                    deferred.resolve(result);
                }, 5000)
                //this is the main thread
                return deferred.promise;

            }
        }
    })
})();