console.log("wallsController");
app.controller('wallsController', ['$scope','wallsFactory','$location', '$cookies', function($scope, wallsFactory, $location, $cookies) {
// $scope.userLogin = {email:"", password:""}
$scope.wall = {};
$scope.post = {};
console.log("here")
if($cookies.get('name') === undefined){
  console.log('++++undefined+++');
  $location.url('index');
}
else{
var cookies = $cookies.getAll();
 var getmessage = function(){

      wallsFactory.getmessage(function(data){
        console.log("inside getmessage=======", data);
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else
        {
          $scope.walls = data.data;
          $location.url('show');
         }
      });
    }
  getmessage();

  var getcomment = function(){
      wallsFactory.getcomment(function(data){
        console.log("inside getcomment=======", data);
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else
        {
          $scope.comments = data.data;
          $location.url('show');
         }
      });
    }
    getcomment();
  } 
  $scope.message = function(){
      $scope.wall._user = cookies;
      console.log("wall._user====", $scope.wall._user);
      wallsFactory.message($scope.wall, function(data){
      console.log("I am inside of walls controller ", data);
      if (data.data.errors)
      {
         $scope.errors = data.data.errors;
        console.log("-----errors-----", $scope.errors);
      }
      else{
        $scope.wall = {};
      }
      getmessage();
    })
  }
  $scope.comment = function(id, index){
    // $scope.$digest();
      console.log("index", index);
      console.log(id);
      console.log("click comment comment!!", $scope.post[index]);
      console.log($cookies.get('id'));
      
      $scope.post[index]._user = $cookies.get('id');
      $scope.post[index]._message = id;
        wallsFactory.comment($scope.post[index], function(data){
      console.log("inside comment comment----", data);
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.post[index] = {};
          console.log("inside post comment");
        }
        getmessage();

      });
  }
}]);