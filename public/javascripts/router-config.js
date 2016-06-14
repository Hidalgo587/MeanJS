angular
    .module('app')
    .config(config);


function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl',
            controllerAs: 'ctrl'
        })

        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostCtrl',
            controllerAs: 'pctrl'
        });
    $urlRouterProvider.otherwise('home');
}
