var recuritingPortal = angular.module('app',['ui.router','ngResource','ui.bootstrap','ngFileUpload']);

recuritingPortal.config(["$stateProvider", "$urlRouterProvider",function($stateProvider,$urlRouterProvider){
   var states = [
       { name: "main",url:"/"},
       { name: "preStage",url: "/preStage/:batch/:sort/:filter" ,params:{
           candidates:[],
           batch:"",
           sort:"",
           filter:""
       },templateUrl:"dev-www/templates/preStage.html",controller:"preStageCtrl"}
   ] 
   states.forEach((state) => $stateProvider.state(state));
   $urlRouterProvider.otherwise('/');

}])
recuritingPortal.directive('customNavbar',function(){
    return {
        restrict : "AE",
        templateUrl:"/dev-www/templates/customNavbar.html",
        controller: "customNavbarCtrl"
    }
})
recuritingPortal.directive('customDataTable',function(){
    return{
        restrict : "AE",
        scope:{
            batch: "=",
            filter: "=",
            sort: '=',
            candidates: "="
        },
        templateUrl: "/dev-www/templates/customDataTable.html",
        controller:'customDataTableCtrl'
    }
})