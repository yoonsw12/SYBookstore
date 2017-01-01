var myApp = angular.mobile('myApp', ['ngRoute']);

// set up all of our routes.
myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller: 'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books', {
		controller: 'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id', {
		controller: 'BooksController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add', {
		controller: 'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id', {
		controller: 'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

