var myApp = angular.module('myApp');

// Scope binds controller to view.
// scape.name == 'eric' -> can be displayed in views by doing {{name}}
// http allows get, post, api etc

// location navagation
// routeParams get data from form etc.
// this will only work with non minified angular.

// Change in snytax here to make it work for angular minified2.
myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.getBooks = function(){
		$http.get('/api/books').success(function(response){
			$scope.books = response;
		});
	}
}]);