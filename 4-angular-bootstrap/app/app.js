var portfolioApp = angular.module('portfolioApp', 
	['ngRoute','firebase']).constant('FIREBASE_URL', 'https://pirate-portfolio.firebaseio.com/');

portfolioApp.config(function ($routeProvider) {
    $routeProvider
    .when("/portfolios",  { 
        controller: "PortfolioListController", 
        templateUrl: "app/partials/portfolios.html" })

    .when("/portfolio/:portfolio_name",  { 
        controller: "PortfolioViewController", 
        templateUrl: "app/partials/portfolio.html"  })

    .when("/",  { redirectTo: "/portfolios" })
    .otherwise({ redirectTo: "/404_page" });
});







