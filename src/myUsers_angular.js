/**
 * Created by drjr on 17-1-22.
 */
var app = angular.module('myApp', []);

app.controller('useCtrl', function($scope){
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
    $scope.passWord1 = '';
    $scope.passWord2 = '';
    $scope.edit = true;

});
