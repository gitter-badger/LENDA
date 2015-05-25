(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ReportsController', ReportsController);

    ReportsController.$inject = ['$scope', '$http'];

    function ReportsController ($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get('./crop_mix.json').success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
                for (var i = 0; i < len; i++) {
                    /* Horizontal Sum */
                    $scope.myData[i].total = $scope.myData[i].corn 
                    + $scope.myData[i].soybeans
                    + $scope.myData[i].soybeansFAC
                    + $scope.myData[i].sorghum
                    + $scope.myData[i].cotton
                    + $scope.myData[i].rice
                    + $scope.myData[i].peanuts
                    + $scope.myData[i].cane
                    + $scope.myData[i].wheat
                    + $scope.myData[i].other;
                }

                /* Vertical Sum */
                for (var i = 0; i < len-1; i++) {
                    $scope.myData[len-1].corn += $scope.myData[i].corn;
                    $scope.myData[len-1].soybeans += $scope.myData[i].soybeans;
                    $scope.myData[len-1].soybeansFAC += $scope.myData[i].soybeansFAC;
                    $scope.myData[len-1].sorghum += $scope.myData[i].sorghum;
                    $scope.myData[len-1].cotton += $scope.myData[i].cotton;
                    $scope.myData[len-1].rice += $scope.myData[i].rice;
                    $scope.myData[len-1].peanuts += $scope.myData[i].peanuts;
                    $scope.myData[len-1].cane += $scope.myData[i].cane;
                    $scope.myData[len-1].wheat += $scope.myData[i].wheat;
                    $scope.myData[len-1].other += $scope.myData[i].other;
                    $scope.myData[len-1].total += $scope.myData[i].total;
                }
            });
        };
        $scope.refresh();
        $scope.gridOptions = {
            data: 'myData',
            showFilter: true,
            // showColumnMenu: true,
            // enableCellSelection: true,
            // enableCellEdit: true,
            // showSelectionCheckbox: true,
            // selectWithCheckboxOnly: true,
            // selectedItems: $scope.mySelections,
            // showFooter: true,
            columnDefs: [
                {
                    field: 'region',
                    displayName: 'Region',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'location',
                    displayName: 'Location',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'corn',
                    displayName: 'Corn',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'soybeans',
                    displayName: 'Soybeans',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'soybeansFAC',
                    displayName: 'SB FAC',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'sorghum',
                    displayName: 'Sorghum',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'cotton',
                    displayName: 'Cotton',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'rice',
                    displayName: 'Rice',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'peanuts',
                    displayName: 'Peanuts',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'cane',
                    displayName: 'Cane',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'wheat',
                    displayName: 'Wheat',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'other',
                    displayName: 'Other',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'total',
                    displayName: 'Total',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                }
            ]
        };
        $scope.addItem = function () {
            $scope.myData.push({});
        };
        $scope.allItems = function () {
            var dataLength = $scope.myData.length;
            alert($scope.myData[dataLength - 1].name);
        };
        $scope.remove = function () {
            _.each($scope.mySelections, function (person) {
                //Real remove (i.e from datastore)
                $scope.myData = _.filter($scope.myData, function (element) {
                    return element.name != person.name;
                });
            });
            $scope.mySelections.splice(0, $scope.mySelections.length);
        };
    }

})();
