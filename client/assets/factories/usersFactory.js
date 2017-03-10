console.log('Users Factory!!');
app.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var users = [];
  var user = {};
  function usersFactory(){
      var _this = this;
      this.login = function(data,callback,errback){
        $http.post('/login',data).then(callback,errback);
      }
      this.index = function(callback){
        $http.get('/').then(callback);
      }
      this.show = function(data, callback){
        $http.get('/show',data).then(callback);
      }
      this.register = function(data,callback,errback){
        $http.post('/register',data).then(callback,errback);
      }

      this.logout = function(data, callback,errback){
        console.log("logout in factory");
        $http.post('/logout', data).then(callback, errback);
      } 
 
    };

  
  return new usersFactory;
}]);
