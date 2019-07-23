module.controller("operatorCtrl", OperatorCtrl)


function OperatorCtrl($scope,$rootScope) {

   $scope.result = operate($scope);
   $rootScope.result = operate($scope);

   $scope.printValue = function() {
    $scope.result = operate($scope);
   $rootScope.result = operate($scope);
} 

}


function operate($scope)
{
    let number1 = parseInt($scope.$parent.number1);
    let number2 = parseInt($scope.$parent.number2);
    if($scope.$parent.operator == '+')
    {
        return number1+number2;
    }
    if($scope.$parent.operator == '-')
    {
        return number1-number2;
    }
    if($scope.$parent.operator == '*')
    {
        return number1*number2;
    }
    if($scope.$parent.operator == '/')
    {
        return number1/number2;
    }
}