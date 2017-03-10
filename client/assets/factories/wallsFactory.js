console.log('Walls Factory!!');
app.factory('wallsFactory', ['$http', function($http) {
  // constructor for our factory
  var walls = [];
  var wall = {};
  var posts = [];
  var post = {};
  function wallsFactory(){
      var _this = this;
      this.message = function(data, callback){
        $http.post('/message', data).then(function(returned_data){
        console.log("message return===",returned_data);
        callback(returned_data);
      });

    };
     this.comment = function(data, callback){
        $http.post('/comment', data).then(function(returned_data){
        console.log("comment return===",returned_data);
        callback(returned_data);
      });
    };
      this.getmessage = function(callback){
        $http.get('/getmessage').then(function(returned_data){
        walls = returned_data;
        console.log("return===",returned_data);
        callback(walls);
      });
    };
     this.getcomment = function(callback){
        $http.get('/getcomment').then(function(returned_data){
        comments = returned_data;
        console.log("return===",returned_data);
        callback(comments);
      });
    };
  
  };
  return new wallsFactory;
}]);
