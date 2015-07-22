﻿(function () {
    var mainController = angular.module("myApp").controller("mainController", function ($scope, $log, userService, $location) {
        
        $scope.loginInfo = { login: "", password: "" };
        $scope.authenticUser = null;
        $scope.serverRunning = false;

        var users = [];
        $scope.onLogin = function () {
            $log.debug("We are now waiting for the server to respond");
            $log.debug("This is going to take 1500 milliseconds");
            $scope.serverRunning = true;
            userService.getUsers().then(function (data) {
                //this is when we have deferred.resolve();

                $log.debug("we have received the data from the server");
                users = data;
                //$log.debug("the login of the user is : " + $scope.loginInfo.login);
                //$log.debug("the password of the user is : " + $scope.loginInfo.password);
                for (var i = 0; i < users.length; i++) {
                    if (users[i].email == $scope.loginInfo.login && users[i].id == $scope.loginInfo.password) {
                        $log.debug("the user is valid and with the role manager");
                        $scope.authenticUser = true;
                        //we would want to move to /reportees
                        $location.url("/reportees")
                        break;
                    }
                    else {
                        $scope.authenticUser = false;
                    }
                }
                $scope.serverRunning = false;
            }, function (data) {
                //this is run when we have deferred.reject()
                $scope.serverRunning = false;
            });
           

           
            
        }

    })
})();