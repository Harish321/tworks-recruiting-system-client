recuritingPortal.controller('customNavbarCtrl',function($scope,$uibModal){

    $scope.fileUpload = () =>{
        var modalInstance = $uibModal.open({
            templateUrl: "/dev-www/templates/fileUploadModal.html",
            controller: "fileUploadModalCtrl",
            resolve: {
                model: function () {
                    return {
                        
                    };
                }
            }
        });
    }
    // modal def goes here;
})

