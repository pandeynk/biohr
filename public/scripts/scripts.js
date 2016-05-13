"use strict";
angular.module("bio", ["ui.router", "snap", "ngAnimate"]).config(["$stateProvider", "$urlRouterProvider", function(r, t) {
 t.when("/dashboard", "/dashboard/manage"), t.otherwise("/login"), r.state("base", {
  "abstract": !0,
  url: "",
  templateUrl: "views/base.html"
 }).state("login", {
  url: "/login",
  parent: "base",
  templateUrl: "views/login.html",
  controller: "LoginCtrl"
 }).state("dashboard", {
  url: "/dashboard",
  parent: "base",
  templateUrl: "views/dashboard.html",
  controller: "DashboardCtrl"
 }).state("manage", {
  url: "/manage",
  parent: "dashboard",
  templateUrl: "views/dashboard/overview.html",
  controller:function($scope, $http, $location){
    $scope.init=function(){
        $http.get("/student/index")
                .success(function(data, status, headers, config){
                    if(data){
                        $scope.users=data;
                    }
                }).error(function(data, status, headers, config){

                });
    }

    $scope.enable=function(id){
        $http.get("/student/enable/"+id)
                .success(function(data, status, headers, config){
                    if(data){
                        $scope.init();
                    }
                }).error(function(data, status, headers, config){

                });
    }

    $scope.disable=function(id){
        $http.get("/student/disable/"+id)
                .success(function(data, status, headers, config){
                    if(data){
                        $scope.init();
                    }
                }).error(function(data, status, headers, config){

                });
    }
  }
 }).state("enroll", {
  url: "/enroll/:id",
  parent: "dashboard",
  templateUrl: "views/dashboard/reports.html",
  controller: function($scope, $stateParams, $http, $location) {
     $scope.id = $stateParams.id;

     $scope.init=function(){
        if($scope.id){
            $http.get("/student/show/"+$scope.id)
                .success(function(data, status, headers, config){
                    if(data){
                        $scope.name=data.name;
                        $scope.userId=data.id;
                        $scope.school=data.school;
                        $scope.class=data.class;
                        $scope.email=data.email;
                    }
                }).error(function(data, status, headers, config){

                });
        }
     }

     $scope.submit=function(){

        var data={
                name: $scope.name,
                email: $scope.email,
                school:$scope.school,
                class:$scope.class
            };

        var config={
            headers: {
                'X-CSRF-TOKEN': angular.element(document.querySelector("#csrf")).prop("content")
            }
        };

        if($scope.id){
            $http.post('/student/update/'+$scope.id, data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                if(data){
                    swal("", "Student updated successfully.", "success");
                    return $location.path("/dashboard");
                }else{
                    swal("", "Student profile not found!", "error");
                    return $location.path("/dashboard");
                }
            }).error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }else{
            $http.post('/student/store', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                swal("", "Student added successfully.", "success");
                    return $location.path("/dashboard");
            }).error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        }
    }
    }
 })
}]), angular.module("bio").controller("LoginCtrl", ["$scope", "$location", function($scope, t) {
 $scope.submit = function() {
    if($scope.username=="admin" && $scope.password=="admin"){
        return t.path("/dashboard"), !1
    }else{
        swal("","Either username or password is incorrect.", "error");
        return false;
    }
  return t.path("/dashboard"), !1
 }
}]), angular.module("bio").controller("DashboardCtrl", ["$scope", "$state", function(r, t) {
 r.$state = t
}]);