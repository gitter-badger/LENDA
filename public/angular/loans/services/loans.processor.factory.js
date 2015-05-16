(function () {
    'use strict';

    angular
        .module('ARM')
        .factory('LoansProcessor', LoansProcessor);

    LoansProcessor.$inject = ['$http', '$q', 'API_URL', 'AppFactory'];

    /* @ngInject */
    function LoansProcessor($http, $q, API_URL, AppFactory) {
        var publicAPI =  {
            getLoansWithExtraData: getLoansWithExtraData
        };
        return publicAPI;
        //////////
        function getLoansWithExtraData() {
            return $http.get(API_URL + '/loans').then(updateLoansData);
        }
        function updateLoanData(loan) {
            return $q.all({
                cats: getExpensesCategories(loan),
                collateral: processCollateral(loan.othercollateral),
                comments: getComments(loan),
                crops: getCrops(loan),
                crosses: processXCollateral(loan),
                expenses: getExpenses(loan),
                fees: getFees(loan),
                fins: processFins(loan),
                has_comment: getPendingComments(loan),
                insurance: getInsurance(loan),
                loancrops: processLoanCrops(loan.loancrops),
                need_vote: getPendingVotes(loan),
                priorlien: processPriorLien(loan.priorlien),
                quests: getLoanQuestions(loan),
                supplements: processSupInsurance(loan.suppins),
                total_ins_value: getTotalInsValue(loan),
                xcols: getCrossCollateralLoans(loan)
            })
                .then(function (updatedData) {
                    angular.extend(loan, updatedData);
                    return loan;
                });
        }
        function updateLoansData(response) {
            var allLoans = response.data.data;
            return $q.all(allLoans.map(updateLoanData));
        }
        //////////
        function filterByCropAndPractice(col, crop, practice) {
            var results = [];
            var filtered = _.filter(col, function(row){
                if(row.crop === crop && row.practice === practice){
                    results.push(row);
                }
            });
            //console.log(filtered);
            return results;
        }
        function flattenExpenses(expenses) {
            var flattened = [];
            angular.forEach(expenses, function (exp) {
                var single = {
                    cat_id: Number(exp.cat_id),
                    expense: exp.expense,
                    loancrop_id: exp.loancrop_id,
                    crop: exp.loancrop.crop.crop,
                    name: exp.loancrop.crop.name,
                    acres: Number(exp.loancrop.acres),
                    arm: Number(exp.arm_adj),
                    dist: Number(exp.dist_adj),
                    other: Number(exp.other_adj),
                    per_acre: Number(exp.arm_adj) + Number(exp.dist_adj) + Number(exp.other_adj),
                    calc_arm: Number(exp.arm_adj) * Number(exp.loancrop.acres),
                    calc_dist: Number(exp.dist_adj) * Number(exp.loancrop.acres),
                    calc_other: Number(exp.other_adj) * Number(exp.loancrop.acres),
                    calc_total: (Number(exp.arm_adj) + Number(exp.dist_adj) + Number(exp.other_adj)) * Number(exp.loancrop.acres)
                };
                this.push(single);
            }, flattened);
            return flattened;
        }
        function getAcresTotal(loan) {
            return _.sumCollection(loan.loancrops, 'acres');
        }
        function getComments(loan) {}
        function getCropExpenses(crop) {
            if(crop.length < 1) { return; }
            return $http.get(API_URL + '/loans/' + crop[0].loan_id + '/expenses/' + crop[0].crop_id)
                .then(function(rsp){
                    var dbRec = rsp.data.data;

                    var processed = dbRec;
                    //console.log('From getCropExpenses', processed);
                    return processed;
                });
        }
        function getCrops(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/farmcrops')
                .then(function (rsp) {
                    var cropsList = rsp.data.data;

                    return $q.all({
                        corn: makeCrop(1, cropsList),
                        soybeans: makeCrop(2, cropsList),
                        beansFAC: makeCrop(3, cropsList),
                        sorghum: makeCrop(4, cropsList),
                        wheat: makeCrop(5, cropsList),
                        cotton: makeCrop(6, cropsList),
                        rice: makeCrop(7, cropsList),
                        peanuts: makeCrop(8, cropsList),
                        sugarcane: makeCrop(9, cropsList)
                    }).then(function (allCrops) {
                        //console.log('All Crops', allCrops);
                        return {
                            corn: allCrops.corn,
                            soybeans: allCrops.soybeans,
                            beansFAC: allCrops.beansFAC,
                            sorghum: allCrops.sorghum,
                            wheat: allCrops.wheat,
                            cotton: allCrops.cotton,
                            rice: allCrops.rice,
                            peanuts: allCrops.peanuts,
                            sugarcane: allCrops.sugarcane
                        };
                    });
                });
        }
        function getCrossCollateralLoans(loan) {
            return _.uniq(_.pluck(loan.xcols, 'collateral_id'));
        }
        function getPendingComments(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/commentstatus')
                .then(function (response) {
                    //console.log(response);
                    if(response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }
                });
        }
        function getPendingVotes(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/pendingvotes')
                .then(function (response) {
                    if(response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }
                });
        }
        function getEmptyCrop() {
            return {
                totals: {
                    acres: 0,
                    bkqty: 0,
                    bkprice: 0,
                    harvest: 0,
                    irr: 0,
                    mill_share: 0,
                    ni: 0,
                    percent_irrigated: 0,
                    price: 0,
                    rebate_price: 0,
                    rebate_share: 0,
                    share: 0,
                    value: 0,
                    prod_yield: 0
                },
                byFarm: []
            };
        }
        function getExpensesCategories(loan) {
            //TODO: Add to loan - Expense categories for this loan!
            return _.uniq(_.pluck(loan.expenses, 'expense'));
        }
        function getExpenses(loan) {
            var expenses = loan.expenses;

            var exps = {
                byCat: processExpsByCat(flattenExpenses(expenses)),
                byCrop: processExpsByCrop(flattenExpenses(expenses)),
                byEntry: flattenExpenses(expenses),
                totals: processExpsTotals(flattenExpenses(expenses))
            };

            //console.log('Expenses: ', exps);
            return (exps);
        }
        function getFees(loan) {

        }
        function getInsurance(loan) {
            var policyList = loan.inspols;
            //console.log('Fins', fins);

            var ins = {
                agencies: processAgencies(policyList),
                byCrop: processInsByCrop(loan),
                database: processForInsDB(policyList),
                //not Working
                nonrp: processNonRPInsurance(policyList),
                policies: policyList,
                //not Working
                totals: processInsTotals(processInsByCrop(policyList))
            };
            //console.log('LoanInsurance: ', ins);
            return (ins);

        }
        function getLoanQuestions(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/quests')
                .then(function (response) {
                    if(response) {
                        //console.log('LoanQuestions: ', response);
                        if(response.data.data[0]) {
                            return response.data.data[0];
                        } else if(response.data.data) {
                            return response.data.data;
                        }
                    } else {
                        return {};
                    }
                });
        }
        function getTotalInsValue(loan) {
            return $http.get(API_URL + '/insurance/' + loan.id + '/value')
                .then(function (response) {
                    return response.data;
                });
        }
        function makeCrop(id, list) {
            var crop_id = Number(id);
            var crop = _.filter(list, function(item){
                if(item.crop_id === crop_id){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            return getCropExpenses(crop).then(function(exp){
                //console.log('fromMakeCrop', exp);

                var expenses = _.chain(exp)
                    .groupBy('expense')
                    .value();

                //console.log('fromMakeCrop', expenses);

                var cropObj = {
                    totals: processCropTotals(crop),
                    byFarm: crop,
                    expenses: expenses
                };
                return cropObj;
            });
        }
        function processAgencies(policies) {
            var result = [];
            var exists = {};
            var arrayOfFinalProduct = [];
            var agentExists = {};

            var firstPass = _.forEach(policies, function(policy){
                if(!exists[policy.agent_id]){
                    result.push(policy);
                    exists[policy.agent_id] = true;
                }
            });

            var secondPass = _.forEach(result, function(policy){
                var idealProduct = {};
                var allreadyHappend = _.find(arrayOfFinalProduct, {'id': policy.agency_id});
                if(!_.isUndefined(allreadyHappend)){
                    allreadyHappend.agents.push({id: policy.agent_id, agent: policy.agent, agent_email: policy.agent_email, agent_phone: policy.agent_phone});
                }else if(!agentExists[policy.agent_id]){
                    idealProduct.agents = [];
                    idealProduct.id = policy.agency_id;
                    idealProduct.agency = policy.agency;
                    idealProduct.agency_address = policy.agency_address;
                    idealProduct.agency_city = policy.agency_city;
                    idealProduct.agency_state = policy.agency_state;
                    idealProduct.agency_zip = policy.agency_zip;
                    idealProduct.agency_email = policy.agency_email;
                    idealProduct.agency_phone = policy.agency_phone;
                    idealProduct.agents.push({id: policy.agent_id, agent: policy.agent, agent_email: policy.agent_email, agent_phone: policy.agent_phone});
                    arrayOfFinalProduct.push(idealProduct);
                    agentExists[policy.agent_id] = true;
                }
            });
            return arrayOfFinalProduct;
        }
        function processCollateral(obj) {
            var all = _.chain(obj).groupBy('type').value();
            return all;
        }
        function processCropTotals(arrCrop) {
            var tstActive = false;
            var acres = 0, is_active = false, bkqty = 0, bkprice = 0, harvest = 0, irr = 0, mill_share = 0, ni = 0, percent_irrigated = 0, price = 0, rebate_price = 0, rebate_share = 0, prod_share = 0, value = 0, prod_yield = 0;

            angular.forEach(arrCrop, function(rows){
                bkqty += Number(rows.bkqty);
                bkprice = Number(rows.bkprice);
                harvest = Number(rows.harvest);
                irr += Number(rows.irr);
                mill_share += Number(rows.mill_share);
                ni += Number(rows.ni);
                price = Number(rows.price);
                rebate_price = Number(rows.rebate_price);
                rebate_share = Number(rows.rebate_share);
                prod_share += Number(rows.share) * (Number(rows.irr) + Number(rows.ni));
                prod_yield += Number(rows.prod_yield);
            });

            if((Number(irr) + Number(ni)) > 0) {
                tstActive = true;
            } else {
                tstActive = false;
            } // end if

            var croptotals = {
                acres: Number(irr) + Number(ni),
                bkqty: Number(bkqty),
                bkprice: Number(bkprice),
                harvest: Number(harvest),
                irr: Number(irr),
                mill_share: Number(mill_share),
                ni: Number(ni),
                percent_irrigated: 100 * (Number(irr)/(Number(irr) + Number(ni))),
                price: Number(price),
                rebate_price: Number(rebate_price),
                rebate_share: Number(rebate_share),
                share: Number(prod_share)/(Number(irr) + Number(ni)),
                prod_yield: Number(prod_yield),
                value: (((Number(prod_share)/(Number(irr) + Number(ni)))/100)*(Number(irr) + Number(ni))*Number(prod_yield) * Number(price))+(((Number(prod_share)/(Number(irr) + Number(ni)))/100) * Number(bkqty) * (Number(bkprice) - Number(price)))+((Number(irr) + Number(ni))*Number(prod_yield) * Number(harvest)),
                is_active: tstActive
            };
            return croptotals;
        }
        function processExpsByCat(expenses) {
            var grped = _.chain(expenses).groupBy('expense').value();
            var cats = _.uniq(_.pluck(expenses, 'expense'));
            //corn.arm*corn.acres + bean.arm*bean.acres etc
            var totsByCat = [];
            angular.forEach(cats, function(cat){
                if(!grped[cat]) {
                    totsByCat.push([]);
                } else {
                    var col = grped[cat];
                    //console.log(col);
                    var colTots = {
                            cat_id: _.pluckuniq(col, 'cat_id'),
                            expense: _.pluckuniq(col, 'expense'),
                            acre_dist: _.sumCollection(col, 'dist'),
                            acre_other: _.sumCollection(col, 'other'),
                            acre_total: _.sumCollection(col, 'per_acre'),
                            calc_arm: _.sumCollection(col, 'calc_arm'),
                            calc_dist: _.sumCollection(col, 'calc_dist'),
                            calc_other: _.sumCollection(col, 'calc_other'),
                            calc_total: _.sumCollection(col, 'calc_total')
                        };
                    totsByCat.push(colTots);
                }
            });
            return totsByCat;
        }
        function processExpsByCrop(expenses) {
            var grped = _.chain(expenses).groupBy('crop').value();

            var byCrop = [];
            angular.forEach(grped, function(crop){
                var byExp = [];
                angular.forEach(crop, function(exp){
                    this.push(exp);
                }, byExp);
                this.push(byExp);
            }, byCrop);
            return byCrop;
        }
        function processExpsTotals(expenses) {
            return {
                byCat: processExpsTotalsByCat(expenses),
                byCrop: processExpsTotalsByCrop(expenses),
                byLoan: processExpsTotalsByLoan(expenses)
            };
        }
        function processExpsTotalsByCat(expenses) {
            var grped = _.chain(expenses).groupBy('expense').value();
            var cats = _.uniq(_.pluck(expenses, 'expense'));

            var totsByCat = [];
            angular.forEach(cats, function(cat){
                if(!grped[cat]){
                    totsByCat.push([
                        {
                            arm: 0,
                            dist: 0,
                            other: 0,
                            total: 0
                        }
                    ]);
                } else {
                    var col = grped[cat];
                    //console.log(col);
                    var colTots = [
                        {
                            arm: _.sumCollection(col, 'calc_arm'),
                            dist: _.sumCollection(col, 'calc_dist'),
                            other: _.sumCollection(col, 'calc_other'),
                            total: _.sumCollection(col, 'calc_total')
                        }
                    ];
                    totsByCat.push(colTots);
                }
            });

            return totsByCat;
        }
        function processExpsTotalsByCrop(expenses) {
            var grped = _.chain(expenses).groupBy('crop').value();
            var crops = AppFactory.getAllCrops();

            var totsByCrop = [];
            angular.forEach(crops, function(crop){
                if(!grped[crop]){
                    totsByCrop.push([
                        {
                            acre_arm: 0,
                            acre_dist: 0,
                            acre_other: 0,
                            acre_total: 0,
                            calc_arm: 0,
                            calc_dist: 0,
                            calc_other: 0,
                            calc_total: 0
                        }
                    ]);
                } else {
                    var col = grped[crop];
                    //console.log(col);
                    var colTots = [
                        {
                            acre_arm: _.sumCollection(col, 'arm'),
                            acre_dist: _.sumCollection(col, 'dist'),
                            acre_other: _.sumCollection(col, 'other'),
                            acre_total: _.sumCollection(col, 'per_acre'),
                            calc_arm: _.sumCollection(col, 'calc_arm'),
                            calc_dist: _.sumCollection(col, 'calc_dist'),
                            calc_other: _.sumCollection(col, 'calc_other'),
                            calc_total: _.sumCollection(col, 'calc_total')
                        }
                    ];
                    totsByCrop.push(colTots);
                }
            });
            return totsByCrop;
        }
        function processExpsTotalsByLoan(expenses) {
            //console.log(expenses);
            return {
                arm: _.sumCollection(expenses, 'calc_arm'),
                dist: _.sumCollection(expenses, 'calc_dist'),
                other: _.sumCollection(expenses, 'calc_other'),
                total: _.sumCollection(expenses, 'calc_total')
            };
        }
        function processFins(loan) {
            /*
            amount_requested: 2750000,
             total_acres: 907.7,
             claims_percent: 20,
             supplement_insurance_discount_percent: 50,
             fsa_assignment_percent: 20,
             other_discount_percent: 100,
             disc_prod_percent: 50,
             equipment_percent: 20,
             realestate_percent: 40,
             non_rp_percent: 20,
             int_percent_arm: 9,
             fee_processing_percent: 1,
             fee_processing_onTotal: true,
             int_arm: 5969.04,
             int_percent_dist: 9,
             int_dist: 5154.501,
             int_percent_other: 9,
             int_other: 4116.464,
             proc_fee: 2463.17005,
             proc_fee_arm_only: 1261.7693,
             fee_service_percent: 1.5,
             fee_service_onTotal: true,
             srvc_fee: 3604.20225,
             srvc_fee_arm_only: 1892.65395,
             total_fee_percent: 2.5,
             fee_total: 6480.51642984,
             total_fsa_payment: 45000,
             total_claims: 25000,
             total_revenue: 395280.468,
             total_balance: 342262.767,
             remaining_balance: 342262.767,
             cash_flow: 61412.76,
             risk: -7575.84,
             collateral_equipment: 300000,
             collateral_realestate: 500000,
             guaranty: 259465.97,
             prod: 359237.87,
             adj_prod: 359237.87,
             disc_adj_prod: 179618.94,
             ins_disc_prod: 81034.82,
             disc_ins: 64827.85,
             disc_ins_percent: 20,
             commit_arm: 126176.93,
             commit_dist: 120140.075,
             commit_other: 95945.762,
             commit_total: 342262.767,
             principal_arm: 12647.743,
             principal_dist: 10921.825,
             principal_other: 8722.342,
             principal: 32291.91,
             arm_and_dist: 273521.149,
             collateral: 268891.469 */
            return loan.financials;
        }
        function processForInsDB(policies) {
            var groupByPractice = _.partial(_.ary(_.groupBy, 2), _, 'practice');

            var mapped = _(policies).chain()
                .groupBy('crop')
                .mapValues(groupByPractice);

            var reduced = _(mapped).chain()
                .map(function(cropGroup) {
                    return _.mapValues(cropGroup, function(v){
                        var initial = _(v).chain().first().clone().value();
                        return _.reduce(_.rest(v), function(result, n){
                            result.acres += n.acres;
                            return result;
                        }, initial);
                    });
                });

            var arrRedux = [];
            var redux = reduced.value();
            _.each(redux, function(col){
                _.each(col, function(row){
                    arrRedux.push(row);
                });
            });
            return arrRedux;
        }
        function processInsByCrop(loan) {
            var policies = loan.inspols;

            var grped = _.chain(policies).groupBy('loancrop_id').value();
            //console.log('grped', grped);
            var byCrop = [];

            angular.forEach(grped, function(row){
                var calcer = {
                    level: _.pluckuniq(row, 'level'),
                    price: _.pluckuniq(row, 'price'),
                    yield: _.weighted(row, 'yield', 'acres'),
                    premium: _.pluckuniq(row, 'premium'),
                    share: _.weighted(row, 'share', 'acres'),
                    acres: _.sumCollection(row, 'acres'),
                    disc_prod_percent: loan.financials.disc_prod_percent
                };

                var crop = {
                    loancrop_id: _.pluckuniq(row, 'loancrop_id'),
                    crop: _.pluckuniq(row, 'crop'),
                    name: _.pluckuniq(row, 'name'),
                    type: _.pluckuniq(row, 'type'),
                    option: _.pluckuniq(row, 'option'),
                    price: _.pluckuniq(row, 'price'),
                    premium: _.pluckuniq(row, 'premium'),
                    acres: _.sumCollection(row, 'acres'),
                    share: _.weighted(row, 'share', 'acres'),
                    level: _.pluckuniq(row, 'level'),
                    ins_yield: _.weighted(row, 'yield', 'acres'),
                    proj_crop_discount: Number(loan.financials.disc_prod_percent),
                    guarantee: Number(AppFactory.calcInsuranceGuaranty(calcer)),
                    value: Number(AppFactory.calcCropValue(calcer))
                };
                this.push(crop);
            }, byCrop);
            return byCrop;
        }
        function processInsPol(arr) {
            if(arr.length < 1){ return false; }
            return {
                crop: arr[0].crop,
                practice: arr[0].practice,
                acres: _.sum(arr, 'acres'),
                premium: _.sum(arr, 'premium')
            };
        } // end function
        function processInsTotals(obj) {
            var lone = { acres: 0, value: 0 };
            var byLoan = _.forEach(obj, function(item, key) {
                lone.acres += Number(item.acres);
                lone.value += Number(item.value);
            });
            return lone;
        }
        function processLoanCrops(crops) {
            if(!crops){ return; }
            var cropplus = _.forEach(crops, function(obj){
                obj.crop_value = AppFactory.incomeCropValue(obj);
                obj.adj_book_value = AppFactory.incomeBookValue(obj);
                obj.adj_harvest_value = AppFactory.incomeHarvestValue(obj);
                obj.crop_total = AppFactory.incomeCropTotal(obj);
                return obj;
            });
            //console.log('LoanCrops', cropplus);
            return cropplus;
        }
        function processNonRPInsurance(obj) {
            var nonrp = _.filter(obj, function(item){
                if( item.type !== 'RP'){
                    return item;
                }
            });
            if(!nonrp){
                return {
                    acres: 0,
                    value: 0
                };
            } else {
                var lone = { acres: 0, value: 0 };
                // TODO: Does nonrp have value to accumulate?
                var byLoan = _.forEach(nonrp, function(item, key) {
                    lone.acres += Number(item.acres);
                    lone.value += Number(item.value);
                });
                return lone;
            }
        }
        function processOthers(obj) {
            if(!obj){ return; }
            var others = _.forEach(obj, function(obj){
                obj.value = Number(obj.amount);
                return obj;
            });
            return others;
        }
        function processOthersTotals(obj) {
            if(!obj) { return; }
            var lone = { value: 0 };
            var bySource = _.forEach(obj, function(item, key) {
                lone.value += Number(item.amount);
            });
            return lone;
        }
        function processPriorLien(liens) {
            if(!liens){ return []; }
            var lienplus = _.map(liens, function(item){
                return _.extend({
                    lientotal: Number(item.projected_crops) + Number(item.fsa_payments) + Number(item.ins_over_discount) + Number(item.nonrp_discount) + Number(item.equipment) + Number(item.realestate) + Number(item.other)
                }, item);
            });
            return {
                liens: lienplus,
                totals: processPriorLiens(lienplus)
            };
        }
        function processPriorLiens(liens) {
            return {
                lienholder: 'Total',
                projected_crops: _.sumCollection(liens, 'projected_crops'),
                fsa_payments: _.sumCollection(liens, 'fsa_payments'),
                ins_over_discount: _.sumCollection(liens, 'ins_over_discount'),
                nonrp_discount: _.sumCollection(liens, 'nonrp_discount'),
                equipment: _.sumCollection(liens, 'equipment'),
                realestate: _.sumCollection(liens, 'realestate'),
                other: _.sumCollection(liens, 'other'),
                supplemental_coverage: _.sumCollection(liens, 'supplemental_coverage'),
                lientotal: _.sumCollection(liens, 'lientotal')
            };
        }
        function processSupInsurance(obj) {
            var suppins = obj;

            var supp = {
                policies: processSupplements(suppins),
                totals: processSuppInsTotals(suppins)
            };

            return (supp);
        }
        function processSuppInsTotals(obj) {
            if(!obj) { return; }
            var lone = { acres: 0, value: 0 };
            var byPol = _.forEach(obj, function(item, key) {
                lone.acres += Number(item.acres);
                lone.value += Number(item.value);
            });
            return lone;
        }
        function processSupplements(obj) {
            if(!obj){ return; }
            var supplus = _.forEach(obj, function(obj){
                obj.value = Number(obj.acres) * (Number(obj.share)/100) * Number(obj.max_indemnity);
                return obj;
            });
            return supplus;
        }
        function processXCollateral(loan) {
            if(!loan.is_cross_collateralized) {
                return [];
            }
            return loan;
        }
        function totalCropExpenses(exps) {
            //console.log('totalCropExpenses', exps);
            var armtotal = _.reduce(exps, function(sum, obj) {
                return sum + Number(obj.arm);
            }, 0);
            var disttotal = _.reduce(exps, function(sum, obj) {
                return sum + Number(obj.dist);
            }, 0);
            var othertotal = _.reduce(exps, function(sum, obj) {
                return sum + Number(obj.other);
            }, 0);
            var totaltotal = Number(armtotal) + Number(disttotal) + Number(othertotal);

            var processed = {
                arm: armtotal,
                dist: disttotal,
                other: othertotal,
                total: totaltotal
            };
            return processed;
        }
    } // end factory

})();
