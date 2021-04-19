recuritingPortal.directive('readFile', function ($parse) {
	return {
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.readFile);
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target});
					});
				};
				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
})
recuritingPortal.controller('fileUploadModalCtrl',($scope,$uibModalInstance,model,Upload,$state)=>{
    $scope.cancel = function () {
        $scope.$close();
    }
    $scope.picked = false;
    $scope.uploadFile =()=>{
        $scope.picked = true;
        Upload.upload({
            url: 'http://localhost:5000/api/file/upload',
            data: {candidateList: $scope.file}
        }).then(function (resp) {
            $scope.$close();
            $state.go("preStage",{candidates:resp.data.rows});
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ');
        });
    }
    $scope.selected = () => { $scope.picked = true;}
})