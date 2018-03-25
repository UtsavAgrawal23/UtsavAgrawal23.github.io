var app = angular.module("app", []);

app.component("helloWorld",{
    bindings: {
        user : "="  
    },
    template : '<div>From component Hello</div>',
    controller : function(){
        var vm = this;
        vm.message = "Hello World"
        console.log(vm.user);
    }
});
