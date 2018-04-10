;(function(){
    function AppController($scope){
        $scope.test = "From Controller";
    }

    angular.module('app').controller('AppController',AppController);
})();