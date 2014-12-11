(function(){
    'use strict';
  angular.module('ARM')
    .factory('AppFactory', function GlobalsFactory($http, API_URL){
      return {
        getDefaultDueDate: getDefaultDueDate
      };

      function getDefaultDueDate(type, year){
        switch(type){
          case '5':
          case '6':
          case '7':
            return '3/15/' + yr;
            break;
          default:
            return '12/15/' + yr;
            break;
        } // end switch
      }
    });
})();