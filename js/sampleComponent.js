var app = angular.module("app", []);

app.component("helloWorld",{
    bindings: {
        user : "="  
    },
    template : '<div>From component {{$ctrl.message}}</div>',
    controller : function(){
        var vm = this;
        vm.message = "From component"
        console.log(vm.user);
    }
});