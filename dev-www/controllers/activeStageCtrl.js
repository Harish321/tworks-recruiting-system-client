recuritingPortal.controller('activeStageCtrl',function($scope,$stateParams,$state,candidateResource,pageHelper){
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
        pageHelper.showLoader();
        candidateResource.getDataById({batchId:$scope.batch}).$promise.then(function(resp){
            $scope.candidates = resp.rows
            $scope.renderCandidates = _.cloneDeep($scope.candidates);
            if($scope.filterOption && $scope.filterValue && $scope.candidates){
                $scope.renderCandidates = $scope.candidates.filter(o => {
                    return o[$scope.filterOption] && o[$scope.filterOption].toString().includes($scope.filterValue);
                })
            }
        },function(err){}).finally(pageHelper.hideLoader);
    }
    [$scope.filterOption,$scope.filterValue] = $scope.filter && $scope.filter.split('.').length == 2 ? [$scope.filter.split('.')[0],$scope.filter.split('.')[1]] : ["",''];
    if($scope.filterOption && $scope.filterValue && $scope.candidates){
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
    $scope.clearFilter =  () => {
        $state.go('activeStage',{
            batch: $scope.batch,
            filter:null,
            sort:null,
            candidates:$scope.candidates
        })
    }
});