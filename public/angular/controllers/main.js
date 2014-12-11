(function(){
    'use strict';
  angular.module('ARM')
    .controller('MainController', function(
      $scope,
      $state,
      toastr,
      GlobalsFactory,
      UsersFactory,
      FarmersFactory,
      FeederFactory,
      LoansFactory
    ){
      $scope.user_id = $('#user_id').data('id');
      $scope.landing_view = 'my_settings_view';

      $scope.loan = $scope.loan || {};

      UsersFactory.getUsers().then(function success(response){
        $scope.users = response.data.data;
      });

      // TODO: Use notifications to determine NeedsVote
      UsersFactory.getUser($scope.user_id).then(function success(response){
        $scope.user = response.data.data;
        UsersFactory.getNotifications($scope.user_id).then(function success(response){
          $scope.user.notifications = response.data.data;
          $scope.user.badged = response.data.data.length;
        });
      });

      GlobalsFactory.getGlobals().then(function success(response){
        $scope.globals = response.data.data[0];
        $scope.cropYears = [
          {id: $scope.globals.CY, year: $scope.globals.CY},
          {id: $scope.globals.PY1, year: $scope.globals.PY1},
          {id: $scope.globals.PY2, year: $scope.globals.PY2},
          {id: $scope.globals.PY3, year: $scope.globals.PY3},
          {id: $scope.globals.PY4, year: $scope.globals.PY4},
          {id: $scope.globals.PY5, year: $scope.globals.PY5},
          {id: $scope.globals.PY6, year: $scope.globals.PY6},
        ];
      });

      GlobalsFactory.getAdminGrader().then(function success(response){
              $scope.grads = response.data.data;
            });

      FeederFactory.init();
      $scope.feeder = FeederFactory.getObject();
      
      FarmersFactory.getFarmers().then(function success(response){
              $scope.farmers = response.data.data;
            });

      LoansFactory.getLoans().then(function success(response){
        $scope.loans = response.data.data;
        //toastr.success('Loaded all loans', 'Success!');
      });

      $scope.getColor = function(val){
        var colors = ['gray', 'green', 'yellow', 'red', 'blue', 'green_off', 'yellow_off'];
        return colors[val] || 'gray';
      };

      $scope.newLoan = function(val){
        var obj = {};
        for(var l=0; l<$scope.feeder.loantypes.length; l++){
         if( val === $scope.feeder.loantypes[l].ltPath){
           $scope.chosenLT = $scope.feeder.loantypes[l].loantype;
           $scope.chosenLT_id = parseInt($scope.feeder.loantypes[l].id);
           LoansFactory.getScreens($scope.feeder.loantypes[l].id).then(function success(response){
             $scope.screens = response.data.data;
             angular.forEach(response.data.data, function(obj, index){
               if(obj.screen == 'farmer'){
                 obj.status = 1;
               } else {
                 obj.status = 0;
               }
             });
             return obj;
           });
           $state.go('new.farmer');
          } // end if
        } // end for
      }; // end newLoan fn

      $scope.getReport = function(val){
        var url = '';
        for(var r=0; r<$scope.reports.length; r++){
          if(val === $scope.reports.rptPath){
            url = 'reports.' + val;
            $state.go(url);
          } // end if
        } // end for
      }; // end getReport fn

      $scope.gtZero = function(value){
        if(value <= 0) {
          return 'text-center';
        }
        else {
          return 'text-right';
        }
      }; // end gtZero fn

      $scope.status = {
        isopen: false
      };

      $scope.clkNotificationBadge = function(id){
        alert(id);
      };

      $scope.toggled = function(open) {
        //$log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

      /* FOR PENDING SORT */
      // compoundSort = 4 * need_vote + 2 * has_comment + is_stale
      $scope.orderOptions = ['applicant','-categoryOrder']
      $scope.myOrder = 'applicant';
      $scope.orderOption = 0;

      $scope.nextOrder = function() {
        $scope.orderOption ++
        if ($scope.orderOption >= $scope.orderOptions.length) $scope.orderOption = 0

        $scope.myOrder = $scope.orderOptions[$scope.orderOption]
      }
    });
})();