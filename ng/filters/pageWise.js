(function myfunction() {
    var pageWise = angular.module("myApp").filter("pageWise", function () {
        return function (input, page, perpage) {
            var filtered = [];
            for (var i = (perpage * (page - 1)) ; i <= ((page * perpage) - 1) ; i++) {
                if (input[i] != null) {
                    filtered.push(input[i]);
                }
            }
            return filtered;
        }
    })
})();