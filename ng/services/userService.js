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

            },
            getReportees: function (id) {
                var deferred = $q.defer();

                var users = valueProvider.userSet;
                var result = [];
                //foreach(item in users){
                
                //}
                $.each(users, function (index, value) {
                    if (value.id == id) {
                         result =value.reportees;
                    }
                });
                $timeout(function () {
                    if (result.length <= 0) {
                        deferred.reject(result);
                    }
                    else {
                        deferred.resolve(result);
                    }
                }, 2000)
                return deferred.promise;
            }
        }
    })
})();