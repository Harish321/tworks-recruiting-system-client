recuritingPortal.controller('activeStageCtrl',function($scope,$stateParams,$state,candidateResource){
    // Assigning filter params to scope
    $scope.batch = $stateParams.batch;
    $scope.sort  = $stateParams.sort;
    $scope.filter = $stateParams.filter;
    $scope.candidates = $stateParams.candidates;
    if($stateParams.pageData && $stateParams.pageData.oneTimeMsg){
        $scope.oneTimeMsg = true;
    }
    $scope.renderCandidates = _.cloneDeep($scope.candidates);
    if($stateParams.candidates == null){
        candidateResource.getDataById({batchId:$scope.batch}).$promise.then(function(resp){
            $scope.candidates = resp.rows
            $scope.renderCandidates = _.cloneDeep($scope.candidates);
        },function(err){})
    }
    [$scope.filterOption,$scope.filterValue] = $scope.filter && $scope.filter.split('.').length == 2 ? [$scope.filter.split('.')[0],$scope.filter.split('.')[1]] : ["",''];
    if($scope.filterOption && $scope.filterValue){
        $scope.renderCandidates = $scope.candidates.filter(o => {
            return o[$scope.filterOption] && o[$scope.filterOption].toString().includes($scope.filterValue);
        })
    }
    $scope.applyFilter = () =>{
        $scope.filter = $scope.filterOption+'.'+$scope.filterValue;
        $state.go('activeStage',{
            batch:$scope.batch,
            sort:$scope.sort,
            filter:$scope.filter,
            candidates:$scope.candidates
        })
    }
    $scope.applySort = () =>{
        $state.go('activeStage',{
            batch:$scope.batch,
            sort:$scope.sort,
            filter:$scope.filter,
            candidates:$scope.candidates
        })   
    }
});