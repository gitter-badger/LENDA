(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('StorageController', StorageController);

    StorageController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory', 'StorageFactory'];

    function StorageController($scope, $state, $stateParams, AppFactory, LoansFactory, StorageFactory) {
        var curr = $state.current.url;
        var currScreen = curr.substring(1, curr.length);
        $scope.newapplication = $state.current.data.newapplication;

        if ($scope.newapplication && $scope.screens) {
            angular.forEach($scope.screens, function (obj) {
                if (obj.screen === currScreen) {
                    obj.status = 1;
                }
            });
        }// end if

        $scope.commodityDD = [
            {id: 1, name: 'corn'},
            {id: 2, name: 'soybeans'},
            {id: 3, name: 'sorghum'},
            {id: 4, name: 'wheat'},
            {id: 5, name: 'cotton'},
            {id: 6, name: 'rice'},
            {id: 7, name: 'peanuts'},
            {id: 8, name: 'sugar cane'}
        ];

        LoansFactory.getStorage($stateParams.loanID)
            .then(function success(rsp){
                var store = rsp.data.data;

                if(store.length === 0){
                    $scope.newStorage = {
                        contract_date: new Date(),
                        grain_buyer: '',
                        advance_percent: 75,
                        payment_terms: 15,
                        amount_requested: 0
                    };
                } else {
                    $scope.newStorage = {
                        contract_date: store[0].contract_date,
                        grain_buyer: store[0].grain_buyer,
                        advance_percent: store[0].advance_percent,
                        payment_terms: store[0].payment_terms,
                        amount_requested: store[0].amount_requested
                    };
                } // end if

                $scope.storage = store;
                $scope.newContract = _getBlankForm();
                $scope.total_stored = {
                    contract_amount: StorageFactory.calcContractAmount($scope.storage),
                    revenue: StorageFactory.calcRevenue($scope.storage),
                    eligible:  StorageFactory.calcEligible($scope.storage, $scope.newStorage.advance_percent),
                    remaining: StorageFactory.calcEligible($scope.storage, $scope.newStorage.advance_percent) - (1 * $scope.newStorage.amount_requested)
                };
            });

        $scope.saveStorageContract = function () {
            //TODO: Validate form
            var ins = {
                loan_id: $stateParams.loanID,
                contract_number: $scope.newContract.contract_number,
                grain_buyer: $scope.newStorage.grain_buyer,
                commodity: $scope.newContract.commodity,
                lien_holder: $scope.newContract.lien_holder,
                contract_date: $scope.newStorage.contract_date,
                delivery_date: $scope.newContract.delivery_due_date,
                contract_amount: $scope.newContract.contract_amount,
                contract_price: $scope.newContract.contract_price,
                owner_share: $scope.newContract.owner_share,
                amount_requested: $scope.newStorage.amount_requested,
                revenue: (1 * $scope.newContract.contract_amount) * (1 * $scope.newContract.contract_price) * (1 - (1 * $scope.newContract.owner_share / 100)),
                eligible_proceeds: ((1 * $scope.newContract.contract_amount) * (1 * $scope.newContract.contract_price) * (1 - (1 * $scope.newContract.owner_share / 100))) * ((1 * ($scope.newStorage.advance_percent) / 100)),
                advance_percent: $scope.newStorage.advance_percent,
                payment_terms: $scope.newStorage.payment_terms
            };
            $scope.storage.push(ins);

            // persist data
            AppFactory.postIt('/storage', ins);

            $scope.total_stored.contract_amount += (1 * ins.contract_amount);
            $scope.total_stored.revenue += (1 * ins.revenue);
            $scope.total_stored.eligible += (1 * ins.eligible_proceeds);
            $scope.total_stored.remaining = (1 * $scope.total_stored.eligible) - (1 * $scope.newStorage.amount_requested);

            $scope.newContract = _getBlankForm();
        };

        $scope.moveFromGrain = function () {
            var loan_id = $stateParams.loanID;
            var data = {
                prod: $scope.total_stored.eligible,
                adj_prod: $scope.total_stored.eligible,
                collateral: $scope.total_stored.eligible,
                commit_arm: $scope.newStorage.amount_requested,
                commit_total: $scope.newStorage.amount_requested
            };
            AppFactory.putIt('/loanfinancials/', loan_id, data);

            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };

        function _getBlankForm() {
            return {
                contract_number: '',
                commodity: '',
                lien_holder: '',
                delivery_due_date: '',
                owner_share: 0.00,
                contract_amount: 0.00,
                uom: 'bu',
                contract_price: 0.0000
            };
        }
    }
})();
