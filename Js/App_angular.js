/**
 * Created by xin on 2016-01-23.
 */

var waterfallApp=angular.module('waterfallApp',[]);
waterfallApp.controller('displayCtrl',function($scope,$http) {
    $http.get("dataSource/data").success(function (data){
        $scope.datas = data;
    })
});