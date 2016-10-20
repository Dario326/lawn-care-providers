angular.module('app', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.datetimepicker'])
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider){
                $urlRouterProvider
                    .otherwise('/home')
                $stateProvider
                
                    .state('app', {
                        
                        url: '/app',
                        templateUrl: '../views/app.html'
                    })
                    .state('home', {
                        url: '/home',
                        templateUrl: '../views/home.html'
                    })
                    .state('about',{
                        url: '/about',
                        templateUrl: '../views/about.html'
                    })
                    .state('contact', {
                        url: '/contact',
                        templateUrl: '../views/contact.html'
                    })
                    .state('services',{
                        url: '/services',
                        templateUrl: '../views/services.html'
                    })
                    .state('signup', {
                        url:'/signup',
                        templateUrl:'../views/signup.html'
                    })
                    
            }])