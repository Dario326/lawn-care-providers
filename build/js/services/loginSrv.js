angular.module('app').factory('loginSrv',[ '$http', '$rootscope', '$state', function($http, $rootScope, $state){
    return {
        isAuthed: function() {
            return $http.get(`/api/auth/google/isAuthed`).success(function(data){
                if(data) {
                    $rootScope.authStatus = data;
                    if(!$rootScope.authStatus.name){
                        $rootScope.authStatus.name = $rootScope.authStatus.email;
                    }
                }
                else if(!data) {
                    $state.go('home', {}, {
                        reload: true
                    })
                }
            })
        }
    }
}])