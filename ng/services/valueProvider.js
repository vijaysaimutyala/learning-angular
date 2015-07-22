(function () {
    var valueProvider = angular.module("myApp").provider("valueProvider",function () {
        this.$get = function () {
            return {
                userSet :[
                    { email: "niranjan_awati", id: 41993, role: "manager" },
                    { email: "rahul_nair09", id: 1, role: "manager" },
                    { email: "pramod_prajapati", id: 2, role: "manager" },
                    { email: "ish_pandey", id: 4, role: "manager" },
                ],
                baseUrl :"http://localhost:80/webapi/"
            }

        }
    })
})();