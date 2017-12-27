/*var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.yourName = "John";
});*/


var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('DropdownCtrl', function ($scope, $log) {
  $scope.mydata = {
    pets: ["Dog","Cat","Cow","Bird","Goat","Fish"],
    days: ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]
  };
  $scope.adders = {};
  //$scope.myitems = ["Dog","Cat","Cow","Bird","Goat","Fish"];

  $scope.mydatakeys = function()
  {
    return Object.keys($scope.mydata);
  }
  $scope.removeItem = function(k,x){
    $scope.mydata[k].splice($scope.mydata[k].indexOf(x),1);
    alert(x+" removed");
  };
  $scope.addItem = function(k){
    if ($scope.adders[k] != "")
    {
      $scope.mydata[k].push($scope.adders[k]);
      $scope.adders[k] = "";
    }
  };
  $scope.removeGroup = function(k){
    delete $scope.mydata[k]
  }
  $scope.addGroup = function(){
    if ($scope.groupdata != "")
    {
      $scope.mydata[$scope.groupdata] = []
      $scope.groupdata = "";
    }
  }

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});
