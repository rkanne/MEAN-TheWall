console.log("usersController");
app.controller('usersController', ['$scope','usersFactory','$location', '$cookies', function($scope, usersFactory, $location, $cookies) {
// $scope.userLogin = {email:"", password:""}
 console.log('index page =====$cookies====='+$cookies.get('name'));
if($cookies.get('name') !== undefined){
  // $cookies.remove('name')
  $location.url('/show');
}

$scope.register = function(){
    usersFactory.register($scope.user, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        console.log(data.data.name,data.data._id);
        $cookies.put('id', data.data._id);
        $cookies.put('name', data.data.name);
        // console.log("====$scope.user===", $scope.user);
        $location.url('show');
      }
    })
  }
  $scope.login = function(){
    usersFactory.login($scope.userLogin, function(data){
      console.log("name====",data.data.name,data.data._id);
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $cookies.put('id', data.data._id);
          $cookies.put('name', data.data.name)
          $location.url('show');
        }
      },
      function(err){
        console.log("I am an error",err);
      });
  }
     
}]);