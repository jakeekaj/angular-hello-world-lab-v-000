function MainController($scope){
 $scope.name = "testname";
 $scope.email = "testemail";
 $scope.phone = "123456";
};

angular
  .module('app')
  .controller('MainController', MainController);
