var app = angular.module("app", []);

app.component("helloWorld",{
    bindings: {
        user : "="  
    },
    controllerAs:'vm',
    template : '<div>From component {{vm.message}}</div>',
    controller : function(){
        var vm = this;
        vm.message = "Hello World"
        console.log(vm.user);
    }
});
