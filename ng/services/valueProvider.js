(function () {
    var valueProvider = angular.module("myApp").provider("valueProvider",function () {
        this.$get = function () {
            return {
                userSet :[
                    {
                        email: "niranjan_awati", id: 41993, role: "manager", reportees: [

                            {id:10, email:"employee_10@abc.com", alias:"employee10", status:10},
                            { id: 11, email: "employee_11@abc.com", alias: "employee11", status: 15 },
                            { id: 12, email: "employee_12@abc.com", alias: "employee12", status: 20 },
                            { id: 13, email: "employee_13@abc.com", alias: "employee13", status: 25 },
                            { id: 14, email: "employee_14@abc.com", alias: "employee14", status: 100 },
                            { id: 15, email: "employee_15@abc.com", alias: "employee15", status: 10 },
                            { id: 16, email: "employee_16@abc.com", alias: "employee16", status: 15 },
                            { id: 17, email: "employee_17@abc.com", alias: "employee17", status: 20 },
                            { id: 18, email: "employee_18@abc.com", alias: "employee18", status: 25 },
                            { id: 19, email: "employee_19@abc.com", alias: "employee19", status: 100 }
                        ]
                    },
                    {
                        email: "rahul_nair09", id: 1, role: "manager", reportees: [

                              { id: 20, email: "employee_20@abc.com", alias: "employee20", status: 10 },
                              { id: 20, email: "employee_20@abc.com", alias: "employee20", status: 10 },
                              { id: 21, email: "employee_21@abc.com", alias: "employee21", status: 15 },
                              { id: 22, email: "employee_22@abc.com", alias: "employee22", status: 20 },
                              { id: 23, email: "employee_23@abc.com", alias: "employee23", status: 25 },
                              { id: 24, email: "employee_24@abc.com", alias: "employee24", status: 100 },

                        ]
                    },
                    {
                        email: "pramod_prajapati", id: 2, role: "manager", reportees: [

                              { id: 30, email: "employee_30@abc.com", alias: "employee30", status: 10 },
                              { id: 30, email: "employee_30@abc.com", alias: "employee30", status: 10 },
                              { id: 31, email: "employee_31@abc.com", alias: "employee31", status: 15 },
                              { id: 32, email: "employee_32@abc.com", alias: "employee32", status: 20 },
                              { id: 33, email: "employee_33@abc.com", alias: "employee33", status: 25 },
                              { id: 34, email: "employee_34@abc.com", alias: "employee34", status: 100 },

                        ]
                    },
                    {
                        email: "ish_pandey", id: 4, role: "manager", reportees: [

                              { id: 40, email: "employee_40@abc.com", alias: "employee40", status: 10 },
                              { id: 40, email: "employee_40@abc.com", alias: "employee40", status: 10 },
                              { id: 41, email: "employee_41@abc.com", alias: "employee41", status: 15 },
                              { id: 42, email: "employee_42@abc.com", alias: "employee42", status: 20 },
                              { id: 43, email: "employee_43@abc.com", alias: "employee43", status: 25 },
                              { id: 44, email: "employee_44@abc.com", alias: "employee44", status: 100 },

                        ]
                    },
                ],
                baseUrl :"http://localhost:80/webapi/"
            }

        }
    })
})();