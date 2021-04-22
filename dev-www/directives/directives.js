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
recuritingPortal.directive('spinner',function(){
    return {
        restrict : "AE",
        templateUrl:"dev-www/templates/spinner.html",
        link:function(scope){
            scope.$on('load',()=>{
                scope.loader = true;
            })
            scope.$on('unload',() => {
                scope.loader = false;
            })
        }
    }
})