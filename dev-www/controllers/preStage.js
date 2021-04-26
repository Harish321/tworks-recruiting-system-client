recuritingPortal.controller('preStageCtrl',function($scope,$stateParams,$state,candidateResource,pageHelper){
    //  Assignment of state params to scope
    $scope.batch = $stateParams.batch;
    $scope.sort  = $stateParams.sort;
    $scope.filter = $stateParams.filter;
    $scope.candidates = $stateParams.candidates;
    if(!$scope.candidates || $scope.candidates.length == 0){
        $state.go("home");
    }
    $scope.renderCandidates = _.cloneDeep($scope.candidates);
    [$scope.filterOption,$scope.filterValue] = $scope.filter && $scope.filter.split('.').length == 2 ? [$scope.filter.split('.')[0],$scope.filter.split('.')[1]] : ["",''];
    if($scope.filterOption && $scope.filterValue){
        $scope.renderCandidates = $scope.candidates.filter(o => {
            return o[$scope.filterOption] && o[$scope.filterOption].toString().includes($scope.filterValue);
        })
    }

    // Actions 
    $scope.applyFilter = () =>{
        $scope.filter = $scope.filterOption+'.'+$scope.filterValue;
        $state.go('preStage',{
            batch:$scope.batch,
            sort:$scope.sort,
            filter:$scope.filter,
            candidates:$scope.candidates
        })
    }
    $scope.applySort = () =>{
        $state.go('preStage',{
            batch:$scope.batch,
            sort:$scope.sort,
            filter:$scope.filter,
            candidates:$scope.candidates
        })   
    }
    $scope.save = () => {
        pageHelper.showLoader();
        candidateResource.save(_.merge($scope.candidates,$scope.renderCandidates)).$promise.then(function(resp){
            $state.go('activeStage',{
                batch: resp.batchId,
                filter:$scope.filter,
                sort:$scope.sort,
                candidates:resp.rows,
                pageData:{
                    oneTimeMsg:true
                }
            })
        },function(err){

        }).finally(()=>{
            pageHelper.hideLoader();
        })
    }
    $scope.clearFilter =  () => {
        $state.go('preStage',{
            batch: null,
            filter:null,
            sort:null,
            candidates:$scope.candidates
        })
    }
});