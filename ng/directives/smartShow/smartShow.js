(function () {
    var smartShow = angular.module("myApp").directive("smartShow", function () {
        return {
            restrict: "A",
            replace: true,
            scope:true,
            controller: function ($scope) {

            }
        }
    })
})();