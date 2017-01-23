/**
 * Created by drjr on 17-1-22.
 */
var app = angular.module('myApp', []);

app.controller('useCtrl', function($scope){
    //页面各个控件的初始状态
    $scope.users = [
        {id: 1, firstName: 'Jhon1', lastName: 'Doe1'},
        {id: 2, firstName: 'Jhon2', lastName: 'Doe2'},
        {id: 3, firstName: 'Jhon3', lastName: 'Doe3'},
        {id: 4, firstName: 'Jhon4', lastName: 'Doe4'},
        {id: 5, firstName: 'Jhon5', lastName: 'Doe5'},
        {id: 6, firstName: 'Jhon6', lastName: 'Doe6'}
    ];
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.password1 = '';
    $scope.password2 = '';
    $scope.edit = true;
    $scope.isShow = false;
    $scope.isDisable = true;
    $scope.editUser = function (temp) {
        $scope.isShow = true;
        $scope.isDisable = true;
        if(temp === 'newUser'){
            $scope.edit = true;
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.password1 = '';
            $scope.password2 = '';
        }else{
            $scope.edit = false;
            $scope.firstName = $scope.users[temp-1].firstName;
            $scope.lastName = $scope.users[temp-1].lastName;

        }

    }

    $scope.$watch('password1', function () {
        $scope.test();
    });

    $scope.$watch('password2', function () {
        $scope.test();
    });

    $scope.$watch('firstName', function () {
        $scope.test();
    });

    $scope.$watch('lastName', function () {
        $scope.test();
    });

    $scope.test = function () {

        if($scope.password2.length && $scope.password1.length
            && $scope.firstName.length && $scope.lastName.length && ($scope.password1 === $scope.password2)){
            $scope.isDisable = false;
        }
    }
});
