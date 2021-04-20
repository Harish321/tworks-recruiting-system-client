recuritingPortal.service('candidateResource',["$resource",function($resource){
    var endpoint = SERVER_URL;
    var resource = $resource(endpoint,null, {
        save:{
            method:"POST",
            url:endpoint+"/api/create"
        },
        getDataById:{
            method:"GET",
            url:endpoint+"/api/getDataById"
        },
    })
    return resource;
}])