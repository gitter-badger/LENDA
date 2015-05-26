(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommitteeCommentController', CommitteeCommentController);

    CommitteeCommentController.$inject = ['$scope', '$http'];

    function CommitteeCommentController ($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get("./committee.comment.json").success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
            });
        };
        $scope.refresh();
        $scope.gridOptions = {
            data: 'myData',
            showFilter: true,
            showGroupPanel: true,
            showColumnMenu: true,
            enableColumnReordering: true,
            // enableCellSelection: true,
            // enableCellEdit: true,
            // showSelectionCheckbox: true,
            // selectWithCheckboxOnly: true,
            selectedItems: $scope.mySelections,
            // showFooter: true,
            columnDefs: [
                /* Elevated Status Icons */
                {
                    field: 'watchlist',
                    displayName: 'Watchlist',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'limit_warning',
                    displayName: 'Limit Warning',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                /* Status Icons */
                {
                    field: 'addendum',
                    displayName: 'Addendum',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'cross_collateral',
                    displayName: 'Cross Collateral',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'bankruptcy_history',
                    displayName: 'Bankruptcy',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'third_party',
                    displayName: 'Third Party',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'add_land',
                    displayName: 'Added Land',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'controlled_disbursement',
                    displayName: 'Controlled Disbursement',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                /* Management Steps */
                {
                    field: 'its_list',
                    displayName: 'ITS List',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'fsa_compliant',
                    displayName: 'FSA Compliant',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'no_prior_liens',
                    displayName: 'No Prior Liens',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'leases_valid',
                    displayName: 'Leases Valid',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'bankruptcy_order_received',
                    displayName: 'Bankruptch Order Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'third_party_credit_verified',
                    displayName: 'Third Party Credit Verified',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'recommended',
                    displayName: 'Recommended',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'arm_approved',
                    displayName: 'ARM Approved',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'dist_approved',
                    displayName: 'Dist Approved',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'close_date',
                    displayName: 'Close Date',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'added_land',
                    displayName: 'Added Land',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'database_reviewed',
                    displayName: 'Database Reviewed',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'arm_ucc_received',
                    displayName: 'ARM UCC Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'dist_ucc_received',
                    displayName: 'Dist UCC Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'aoi_received',
                    displayName: 'AOI Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'ccc_received',
                    displayName: 'CCC Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'rebate_assignment',
                    displayName: 'Rebate Assignment',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'account_reconciliation',
                    displayName: 'Account Reciliation',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                /* Visible Report Data */
                {
                    field: 'committee_member',
                    displayName: 'Member',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'analyst',
                    displayName: 'EID',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'applicant',
                    displayName: 'Applicant',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'crop_year',
                    displayName: 'Year',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'loan_type',
                    displayName: 'Type',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'loan_addendum',
                    displayName: 'Addendum',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'committee_log',
                    displayName: 'Log',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    maxWidth: 100,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                }
            ]
        };
    }

})();
