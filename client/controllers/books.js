var myApp = angular.module('myApp');

// Scope binds controller to view.
// scape.name == 'eric' -> can be displayed in views by doing {{name}}
// http allows get, post, api etc

// location navagation
// routeParams get data from form etc.
// this will only work with non minified angular.

// Change in snytax here to make it work for angular minified.
myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log("Books loading");

	$scope.getBooks = function(){
		$http.get('/api/books').then(function (response){
			console.log(response.data);
			$scope.books = response.data;
	    },function (error){

	    });
	}
}]);