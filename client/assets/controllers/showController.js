console.log("showController");

app.controller('showController', ['$scope','usersFactory','$location', '$cookies', function($scope, usersFactory, $location, $cookies) {

if($cookies.get('name') === undefined){
  console.log('++++undefined+++');
  $location.url('index');
}
else{
  var show = function(){
    console.log("show=======");
      usersFactory.show($scope.user, function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else
        {
          $scope.users = data.data;
          $scope.currentUser = $cookies.get('name');
          $location.url('show');
        }
      }, 
      function(err){
        console.log("I am an error",err);
      })
    }
  show();
}

 $scope.logout = function(){
   console.log("inside logout");
                usersFactory.logout($scope.user, function(data){
                  $cookies.remove('name');
                  $location.url('index');
                });
              }
     
}]);