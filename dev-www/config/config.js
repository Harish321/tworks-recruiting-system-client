recuritingPortal.config(["$stateProvider", "$urlRouterProvider",function($stateProvider,$urlRouterProvider){
    var states = [
        { name: "home",url:"/home",template:"<div class='home-msg'>Upload <span style='color:#444444;'> <i class='fa fa-file'></i> File</span> to Preview</div>"},
        { name: "preStage",url: "/preStage/:sort/:filter" ,params:{
            candidates:[],
            sort:"",
            filter:""
        },templateUrl:"dev-www/templates/preStage.html",controller:"preStageCtrl"},
        { name: "activeStage",url: "/activeStage/:batch/:sort/:filter" ,params:{
             candidates:null,
             batch:"",
             sort:"",
             filter:"",
             pageData:{},
     },templateUrl:"dev-www/templates/activeStage.html",controller:"activeStageCtrl"}
    ] 
    states.forEach((state) => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/home');
 }])