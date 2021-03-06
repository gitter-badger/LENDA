(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('library.classroom', {
                    url: '/classroom',
                    templateUrl: 'angular/library/classroom/classroom.html',
                    controller: 'ClassroomController',
                    controllerAs: 'vm'
                })
                .state('library.legend', {
                    url: '/legend',
                    templateUrl: 'angular/library/legend/legend.html',
                    controller: 'LegendController'
                })
                .state('library.legaldocs', {
                    url: '/legaldocs',
                    templateUrl: 'angular/library/legal-docs/legaldocs.html',
                    controller: 'LegalDocsController'
                })
                .state('library.loanproducts', {
                    url: '/loanproducts',
                    templateUrl: 'angular/library/loan-products/loanprods.html',
                    controller: 'LoanProductsController'
                })
                .state('library.matrix', {
                    url: '/matrix',
                    templateUrl: 'angular/library/matrix/matrix.html',
                    controller: 'MatrixController',
                    controllerAs: 'vm',
                    resolve: {
                        InitialData: function(LibraryFactory){
                            return LibraryFactory.getMatrix();
                        }
                    }
                })
                .state('library.pdfapps', {
                    url: '/pdfapps',
                    templateUrl: 'angular/library/pdf-apps/pdfapps.html',
                    controller: 'PdfAppsController',
                    resolve: {
                        InitialData: function($http, API_URL){
                            var url = API_URL + '/pdfapps';
                            return $http.get(url)
                                .then(function(rsp){
                                    return rsp.data.data;
                                });
                        }
                    }
                })
                .state('library.polsprocs', {
                    url: '/polsprocs',
                    templateUrl: 'angular/library/policies/polsprocs.html',
                    controller: 'PolsProcsController'
                })
                .state('library.resources', {
                    url: '/resources',
                    templateUrl: 'angular/library/resources/resources.html',
                    controller: 'ResourcesController'
                });
        });
})();
