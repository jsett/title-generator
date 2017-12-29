var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('DropdownCtrl', function ($scope, $log) {
  $scope.mydata = {
    pets: ["Dog","Cat","Cow","Bird","Goat","Fish"],
    days: ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
    months: ["Jan","Feb","Mar","Apl"]
  };
  //$scope.mydata = {};

  $scope.adders = {};

  $scope.ComboPredictor = function()
  {
    if (Object.keys($scope.mydata).length > 0)
    {
      //$log.log("combo predict");
      t = 1
      for (var x of Object.keys($scope.mydata)){
        //$log.log(x);
        //$log.log($scope.mydata[x].length);
        t = t * $scope.mydata[x].length
      }
    }
    else {
      t = 0;
    }
    return t;
  }
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
      if ($scope.mydata[k].indexOf($scope.adders[k]) != -1)
      {
        alert("Already Used");
        $scope.adders[k] = "";
      }
      else {
        $scope.mydata[k].push($scope.adders[k]);
        $scope.adders[k] = "";
      }
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

  $scope.myop = "";
  $scope.outputhide = function(){
    if ($scope.myop == "")
    {
      return true;
    }
    return false;
  }
  $scope.status = {
    isopen: false
  };
  $scope.GenerateCombos = function(p, listdepth){
    function cartesian() {
      a = Object.keys($scope.mydata);
      o = []
      for (x of a)
      {
        o.push($scope.mydata[x])
      }
      var r = [], arg = o, max = arg.length-1;
      function helper(arr, i) {
        for (var j=0, l=arg[i].length; j<l; j++) {
          var a = arr.slice(0); // clone arr
          a.push(arg[i][j]);
          if (i==max)
            r.push(a);
          else
            helper(a, i+1);
        }
      }
      helper([], 0);
      return r;
    }
    zzzz = cartesian();
    return zzzz;
  }
  $scope.GenToScreen = function(){
    z = $scope.GenerateCombos();
    r = z.map(function(x){return x.join(" ")}).join("\n");
    $scope.myop = r;
  }

  $scope.SaveToFile = function(){
    localStorage.setItem($scope.savename, JSON.stringify($scope.mydata));
  }
  $scope.getkeys = function(){
    x = Object.keys(localStorage);
    r = [];
    k = 0;
    for (var i of x){
      r.push([k,i]);
      k = k + 1;
    }
    return r
  }
  
  $scope.LoadFromFile = function(){

  }

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
