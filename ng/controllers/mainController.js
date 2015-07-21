(function () {
    var mainController = angular.module("myApp").controller("mainController", function ($scope, $log) {
        var users = [
            { email: "niranjan_awati", id: 41993, role: "manager" },
            { email: "rahul_nair09", id: 1, role: "manager" },
            { email: "pramod_prajapati", id:2 , role: "manager" },
            { email: "ish_pandey", id: 4, role: "manager" },
        ];
        $scope.loginInfo = { login: "", password: "" };
        $scope.authenticUser = null;

        $scope.onLogin = function () {
            $log.debug("the login of the user is : " + $scope.loginInfo.login);
            $log.debug("the password of the user is : " + $scope.loginInfo.password);

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == $scope.loginInfo.login && users[i].id == $scope.loginInfo.password) {
                    $log.debug("the user is valid and with the role manager");
                    $scope.authenticUser = true;
                    break;
                }
                else {
                    $scope.authenticUser = false;
                }
            }
            
        }

    })
})();