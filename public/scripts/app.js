angular
    .module('myApp', ['ngRoute'])
    .config(config);
    // .controller('HomeController', HomeController)
    // .controller('AboutController', AboutController);


config.$inject = ['$routeProvider'];
function config(   $routeProvider   ) {
  $routeProvider
  .when('/home', {
    templateUrl: '/public/templates/land.html',
    // controller: 'AboutController',
    controllerAs: 'homeCtrl'
  })
  .when('/about', {
    templateUrl: '/public/templates/about.html',
    // controller: 'SpecialController',
    controllerAs: 'aboutCtrl'
  })
  .when('/work', {
    templateUrl: '/public/templates/work.html',
    // controller: 'PicturesController',
    controllerAs: 'workCtrl'
  })
  .when('/contact', {
    templateUrl: '/public/templates/contact.html',
    // controller: 'ContactController',
    controllerAs: 'contactCtrl'
  })

  .otherwise({redirectTo: '/land'});
}
