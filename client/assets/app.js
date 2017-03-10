var app = angular.module('app', ['ngRoute','ngCookies']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
	 	.when('/',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/show',{
            templateUrl: 'partials/show.html'
        })
		.when('/users',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/register',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/login',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/logout',{
            templateUrl: 'partials/show.html'
        })
        .when('/message',{
            templateUrl: 'partials/show.html',
            controller: 'wallsController'
        })
        .when('/comment',{
            templateUrl: 'partials/show.html',
            controller: 'wallsController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });