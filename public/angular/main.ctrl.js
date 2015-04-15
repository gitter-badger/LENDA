(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$state', '$q', 'toastr', 'FILE_URL', 'AppFactory', 'FarmersFactory', 'FeederFactory', 'GlobalsFactory', 'LendaFactory', 'LoansFactory', 'UsersFactory'];

    function MainController($scope, $state, $q, toastr, FILE_URL, AppFactory, FarmersFactory, FeederFactory, GlobalsFactory, LendaFactory, LoansFactory, UsersFactory) {
        $scope.user_id = $('#user_id').data('id');
        $scope.landing_view = 'settings';
        $scope.file_url = FILE_URL;
        $scope.inArray = AppFactory.inArray;

        UsersFactory.getUsers()
            .then(function success(rsp){
                $scope.users = rsp.data.data;
                //toastr.success('Loaded All Users', 'Success!');
            });

        UsersFactory.getUser($scope.user_id)
            .then(function success(response) {
                var notifiers = response.data.data.notifications;
                $scope.user = response.data.data;
                $scope.user.notifications = notifiers;
                $scope.user.badged = response.data.data.notifications.length;

                $scope.tooltipNotifications = getTallies(notifiers);
                toastr.success('Loaded Current User', 'Success!');
            });

        GlobalsFactory.getGlobals()
            .then(function success(rsp){
                $scope.globals = rsp.data[0];
                toastr.success('Loaded Global Values', 'Success!');
            });

        FeederFactory.init();
        $scope.feeder = FeederFactory.getObject();

        //SCOPE FUNCTIONS
        $scope.newLoan = function createLoan(type_id) {
            var types = _.find($scope.feeder.loantypes, function(item){
                return item.id === type_id;
            });
            $scope.chosenLT = types.loantype;
            $scope.chosenLT_id = types.id;

            LoansFactory.getScreens(types.id)
                .then(function success(rsp) {
                    $scope.screens = rsp.data.data;
                    angular.forEach(rsp.data.data, function (res) {
                        if (res.screen === 'farmer') {
                            res.status = 1;
                        } else {
                            res.status = 0;
                        }
                    });
                    var obj = {
                        app_date: moment(new Date()).format('YYYY-MM-DD'),
                        due_date: moment(new Date(AppFactory.getDefaultDueDate(types.id, $scope.globals.crop_year))).format('YYYY-MM-DD'),
                        loan_type_id: types.id,
                        crop_year: $scope.globals.crop_year,
                        season: $scope.globals.season,
                        loc_id: $scope.user.loc_id,
                        region_id: $scope.user.region_id,
                        user_id: $scope.user.id
                    };
                    LoansFactory.insertLoan(obj)
                        .then(function success(response) {
                            $state.go('new.farmer', {loantypeID: types.id, loanID: response.data.message.id});
                        });
                });
        }; // end newLoan fn
        $scope.getColor = AppFactory.returnColor;
        $scope.getReport = function (val) {
            var url = '';
            for (var r = 0; r < $scope.reports.length; r++) {
                if (val === $scope.reports.rptPath) {
                    url = 'reports.' + val;
                    $state.go(url);
                } // end if
            } // end for
        }; // end getReport fn
        $scope.gtZero = AppFactory.gtZero;
        $scope.clkNotificationBadge = function (id) {
            //TODO: Modal
            alert(id);
        };
        $scope.createLenda = function () {
            return LendaFactory.create({
                loan_id: 1,
                type: 'LENDA',
                user_id: 2,
                comment: 'This is a test LENDA comment generated in Main.js'
            });
        };
        $scope.updateUserInfo = function () {
            //TODO: create function
            alert('Updating User Info');
        };
        $scope.updateFilterPrefs = function () {
            //TODO: create function
            alert('Updating Filters');
        };
        $scope.updateViewPrefs = function (o) {
            AppFactory.putIt('/viewoptions/', $scope.user.id, o);
            toastr.success('Changes Saved', 'Success!');
        };

        $scope.toggled = function (open) {
            //$log.log('Dropdown is now: ', open);
        };
        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
        $scope.status = { isopen: false };

        $scope.changeLandingView = function (val) {
            switch (val) {
                case 'all':
                    $scope.loanList = $scope.loans;
                    break;
                case 'settings':
                    $scope.loanList = _.filter($scope.loans, function (i) {
                        return i.status_id === '1' && i.crop_year === $scope.globals.crop_year;
                    });
                    break;
                case 'fall':
                    $scope.loanList = _.filter($scope.loans, function (i) {
                        return i.status_id === '1' && i.crop_year === $scope.globals.crop_year;
                    });
                    $scope.loanList = _.filter(_.filter($scope.loans,
                        function (i) {
                            return i.status_id === '1';
                        }
                    ), function (i) {
                        return i.season === 'F';
                    });
                    break;
                case 'spring':
                    $scope.loanList = _.filter(_.filter($scope.loans,
                        function (i) {
                            return i.status_id === '1';
                        }
                    ), function (i) {
                        return i.season === 'S';
                    });
                    break;
            } // end switch
        };

        /* METHODS */
        function getTallies(arr){
            var catNotify = _.chain(arr)
                .groupBy('notification_type')
                .value();

            var penAct = catNotify.report.length;
            var manReq = catNotify.vote.length;
            var reqRep = catNotify.office.length;

            var retHTML = '<p style="text-align: left !important;">Pending Actions: (';
            retHTML += penAct;
            retHTML += ')</p><p style="text-align: left !important;">Management Required: (';
            retHTML += manReq;
            retHTML += ')</p><p style="text-align: left !important;">Review Reports: (';
            retHTML += reqRep;
            retHTML += ')</p>';

            return retHTML;
        }


    } // end controller
})();
