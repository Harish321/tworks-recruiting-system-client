recuritingPortal.controller('preStageCtrl',function($scope,$stateParams,$state,candidateResource){
    //  Assignment of state params to scope
    $scope.batch = $stateParams.batch;
    $scope.sort  = $stateParams.sort;
    $scope.filter = $stateParams.filter;
    $scope.candidates = $stateParams.candidates;
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
        candidateResource.save($scope.candidates).$promise.then(function(resp){
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

        })
    }
});