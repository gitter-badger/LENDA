(function(){
    'use strict';
    angular
      .module('ARM')
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'angular/views/home.html',
            controller: 'HomeController',
            resolve: {
              armed: function($q, $timeout){
                var defer = $q.defer();
                $timeout(function(){
                  defer.resolve();
                }, 1000);
                return defer.promise;
              }
            }
          })
          .state('management', {
            url: '/management',
            templateUrl: 'angular/views/management.html',
            controller: 'ManagementController'
          })
          .state('prefs', {
            url: '/prefs',
            templateUrl: 'angular/views/prefs.html',
            controller: 'PrefsController'
          })

          // LIBRARY
          .state('calendar', {
            url: '/calendar',
            templateUrl: 'angular/views/calendar.html',
            controller: 'CalendarController'
          })
          .state('legend', {
            url: '/legend',
            templateUrl: 'angular/views/legend.html',
            controller: 'LegendController'
          })
          .state('legal_docs', {
            url: '/legal_docs',
            templateUrl: 'angular/views/legal_docs.html',
            controller: 'LegalDocsController'
          })
          .state('loan_products', {
            url: '/loan_products',
            templateUrl: 'angular/views/loanprods.html',
            controller: 'LoanProductsController'
          })
          .state('matrix', {
            url: '/matrix',
            templateUrl: 'angular/views/matrix.html',
            controller: 'MatrixController'
          })
          .state('pdf_apps', {
            url: '/pdf_apps',
            templateUrl: 'angular/views/pdf_apps.html',
            controller: 'PdfAppsController'
          })
          .state('pols_procs', {
            url: '/pols_procs',
            templateUrl: 'angular/views/pols_procs.html',
            controller: 'PolsProcsController'
          })
          .state('resources', {
            url: '/resources',
            templateUrl: 'angular/views/resources.html',
            controller: 'ResourcesController'
          })

          // REPORTS
          .state('reports', {
            url: '/rpts',
            templateUrl: 'angular/views/reports/home.html',
            controller: 'ReportsController'
          })
          .state('reports.accrecon', {
            url: '/accrecon',
            templateUrl: 'angular/views/reports/account_reconcilliation.html'
          })
          .state('reports.actdet', {
            url: '/actdet',
            templateUrl: 'angular/views/reports/activity_detail.html'
          })
          .state('reports.actsum', {
            url: '/actsum',
            templateUrl: 'angular/views/reports/activity_summary.html'
          })
          .state('reports.avcred', {
            url: '/avcred',
            templateUrl: 'angular/views/reports/available_credit.html'
          })
          .state('reports.cfarm', {
            url: '/cfarm',
            templateUrl: 'angular/views/reports/cfarm.html'
          })
          .state('reports.comapp', {
            url: '/comapp',
            templateUrl: 'angular/views/reports/committee_approval.html'
          })
          .state('reports.comcom', {
            url: '/comcom',
            templateUrl: 'angular/views/reports/committee_comment.html'
          })
          .state('reports.crpmix', {
            url: '/crpmix',
            templateUrl: 'angular/views/reports/crop_mix.html'
          })
          .state('reports.cusbud', {
            url: '/cusbud',
            templateUrl: 'angular/views/reports/customer_budget.html'
          })
          .state('reports.fmrhis', {
            url: '/fmrhis',
            templateUrl: 'angular/views/reports/farmer_history.html'
          })
          .state('reports.lnman', {
            url: '/lnman',
            templateUrl: 'angular/views/reports/loan_management.html'
          })
          .state('reports.repcus', {
            url: '/repcus',
            templateUrl: 'angular/views/reports/repeat_customer.html'
          })
          .state('reports.usradt', {
            url: '/usradt',
            templateUrl: 'angular/views/reports/user_audit.html'
          })

          // ADMIN
          .state('admin', {
            abstract: true,
            url: '/admin',
            templateUrl: 'angular/views/admin/home.html',
            controller: 'AdminController'
          })
          .state('admin.crops', {
            url: '/crops',
            templateUrl: 'angular/views/admin/crops.html',
            controller: 'AdminCropsController'
          })
          .state('admin.distributors', {
            url: '/distributors',
            templateUrl: 'angular/views/admin/distributors.html',
            controller: 'AdminDistributorsController'
          })
          .state('admin.entitytypes', {
            url: '/entitytypes',
            templateUrl: 'angular/views/admin/entitytypes.html'
          })
          .state('admin.entitytypes.edit', {
            url: '/edit/:entitytypeId',
            templateUrl: 'angular/views/admin/entitytype.html',
            controller: 'AdminEntitytypesController'
          })
          .state('admin.instypes', {
            url: '/instypes',
            templateUrl: 'angular/views/admin/instypes.html'
          })
          .state('admin.instypes.edit', {
            url: '/edit/:instypeId',
            templateUrl: 'angular/views/admin/instype.html',
            controller: 'AdminInstypesController'
          })
          .state('admin.loantypes', {
            url: '/loantypes',
            templateUrl: 'angular/views/admin/loantypes.html'
          })
          .state('admin.loantypes.edit', {
            url: '/edit/:loantypeId',
            templateUrl: 'angular/views/admin/loantype.html',
            controller: 'AdminLoantypesController'
          })
          .state('admin.locations', {
            url: '/locations',
            templateUrl: 'angular/views/admin/locations.html'
          })
          .state('admin.locations.edit', {
            url: '/edit/:locationId',
            templateUrl: 'angular/views/admin/location.html',
            controller: 'AdminLocationsController'
          })
          .state('admin.regions', {
            url: '/regions',
            templateUrl: 'angular/views/admin/regions.html'
          })
          .state('admin.regions.edit', {
            url: '/edit/:regionId',
            templateUrl: 'angular/views/admin/region.html',
            controller: 'AdminRegionsController'
          })
          .state('admin.reports', {
            url: '/reports',
            templateUrl: 'angular/views/admin/reports.html'
          })
          .state('admin.reports.edit', {
            url: '/edit/:reportId',
            templateUrl: 'angular/views/admin/report.html',
            controller: 'AdminReportsController'
          })
          .state('admin.roles', {
            url: '/roles',
            templateUrl: 'angular/views/admin/roles.html'
          })
          .state('admin.roles.edit', {
            url: '/edit/:roleId',
            templateUrl: 'angular/views/admin/role.html',
            controller: 'AdminRolesController'
          })
          .state('admin.units', {
            url: '/units',
            templateUrl: 'angular/views/admin/units.html'
          })
          .state('admin.units.edit', {
            url: '/edit/:unitId',
            templateUrl: 'angular/views/admin/unit.html',
            controller: 'AdminUnitsController'
          })
          .state('admin.users', {
            url: '/users',
            templateUrl: 'angular/views/admin/users.html'
          })
          .state('admin.users.edit', {
            url: '/edit/:userId',
            templateUrl: 'angular/views/admin/user.html',
            controller: 'AdminUsersController'
          })

          // NEW APPLICATIONS
          .state('new', {
            abstract: true,
            url: '/new/{loantypeID:\\d+}/{loanID:\\d+}',
            templateUrl: 'angular/views/newApp.html',
            controller: 'NewLoanController',
            resolve: {
              Loan: function($stateParams, LoansFactory){
                return LoansFactory.getLoan($stateParams.loanID);
              }
            }
          })
          .state('new.affiliates', {
            url: '/affiliates',
            templateUrl: 'angular/views/loans/newaffiliates.html',
            controller: 'NewAffiliatesController'
          })
          .state('new.applicant', {
            url: '/applicant',
            templateUrl: 'angular/views/loans/newapplicant.html',
            controller: 'NewApplicantController'
          })
          .state('new.budget', {
            url: '/budget',
            templateUrl: 'angular/views/loans/newbudget.html',
            controller: 'NewBudgetController'
          })
          .state('new.crops', {
            url: '/crops',
            templateUrl: 'angular/views/loans/newcrops.html',
            controller: 'NewCropsController'
          })
          .state('new.distributor', {
            url: '/distributor',
            templateUrl: 'angular/views/loans/newdistributor.html',
            controller: 'NewDistributorController'
          })
          .state('new.expenses', {
            url: '/expenses',
            templateUrl: 'angular/views/loans/expenses.html',
            controller: 'NewBudgetsController'
          })
          .state('new.farmer', {
            url: '/farmer',
            templateUrl: 'angular/views/loans/newfarmer.html',
            controller: 'NewFarmerController',
            resolve: {
              Loan: function($stateParams, LoansFactory){
                return LoansFactory.getLoan($stateParams.loanID);
              }
            }
          })
          .state('new.farms', {
            url: '/farms',
            templateUrl: 'angular/views/loans/newfarms.html',
            controller: 'NewFarmsController'
          })
          .state('new.financials', {
            url: '/financials',
            templateUrl: 'angular/views/loans/newfinancials.html',
            controller: 'NewFinancialsController'
          })
          .state('new.insurance', {
            url: '/insurance',
            templateUrl: 'angular/views/loans/newinsurance.html',
            controller: 'NewInsuranceController'
          })
          .state('new.quests', {
            url: '/quests',
            templateUrl: 'angular/views/loans/quests.html',
            controller: 'NewQuestsController'
          })
          .state('new.prerequisites', {
            url: '/prerequisites',
            templateUrl: 'angular/views/loans/prerequisites.html',
            controller: 'NewPrerequisitesController'
          })
          .state('new.plannedcrops', {
            url: '/plannedcrops',
            templateUrl: 'angular/views/loans/newplannedcrops.html',
            controller: 'NewPlannedCropsController'
          })
          .state('new.references', {
            url: '/references',
            templateUrl: 'angular/views/loans/newreferences.html',
            controller: 'NewReferencesController'
          })
          .state('new.terms', {
            url: '/terms',
            templateUrl: 'angular/views/loans/newterms.html',
            controller: 'NewTermsController'
          })
          .state('new.yield', {
            url: '/yield',
            templateUrl: 'angular/views/loans/newyield.html',
            controller: 'NewYieldController'
          })

          //EDIT APPLICATIONS
          .state('edit',{
            abstract: true,
            url: '/edit/{loanID:\\d+}',
            templateUrl: 'angular/views/editapp.html',
            controller: 'EditAppController',
            resolve: {
              Loan: function(LoansFactory, $stateParams){
                return LoansFactory.getLoan($stateParams.loanID);
              }
            }
          })
          .state('edit.affiliates', {
            url: '/affiliates',
            templateUrl: 'angular/views/loans/editaffiliates.html',
            controller: 'AffiliatesController'
          })
          .state('edit.applicant', {
            url: '/applicant',
            templateUrl: 'angular/views/loans/editapplicant.html',
            controller: 'EditApplicantsController'
          })
          .state('edit.audit', {
            url: '/audit',
            templateUrl: 'angular/views/loans/audit.html',
            controller: 'AuditsController'
          })
          .state('edit.budgets', {
            url: '/budgets',
            templateUrl: 'angular/views/loans/budgets.html',
            controller: 'BudgetsController'
          })
          .state('edit.closing', {
            url: '/closing',
            templateUrl: 'angular/views/loans/closing.html',
            controller: 'ClosingController'
          })
          .state('edit.comments', {
            url: '/comments',
            templateUrl: 'angular/views/loans/comments.html',
            controller: 'CommentsController'
          })
          .state('edit.committee', {
            url: '/committee',
            templateUrl: 'angular/views/loans/committee.html',
            controller: 'CommitteeController'
          })
          .state('edit.crops', {
            url: '/crops',
            templateUrl: 'angular/views/loans/editcrops.html',
            controller: 'EditCropsController'
          })
          .state('edit.disbursement', {
            url: '/disbursement',
            templateUrl: 'angular/views/loans/disbursement.html',
            controller: 'DisbursementController'
          })
          .state('edit.distributor', {
            url: '/distributor',
            templateUrl: 'angular/views/loans/editdistributor.html',
            controller: 'EditDistributorController'
          })
          .state('edit.farmdetails', {
            url: '/farmdetails',
            templateUrl: 'angular/views/loans/farmdetails.html',
            controller: 'EditFarmDetailsController'
          })
          .state('edit.farmer', {
            url: '/farmer',
            templateUrl: 'angular/views/loans/editfarmer.html',
            controller: 'EditFarmerController'
          })
          .state('edit.farms', {
            url: '/farms',
            templateUrl: 'angular/views/loans/editfarms.html',
            controller: 'EditFarmsController'
          })
          .state('edit.financials', {
            url: '/financials',
            templateUrl: 'angular/views/loans/editfinancials.html',
            controller: 'FinancialsController'
          })
          .state('edit.insurance', {
            url: '/insurance',
            templateUrl: 'angular/views/loans/editinsurance.html',
            controller: 'EditInsuranceController'
          })
          .state('edit.optimizer', {
            url: '/optimizer',
            templateUrl: 'angular/views/loans/optimizer.html',
            controller: 'EditOptimizerController'
          })
          .state('edit.plannedcrops', {
            url: '/plannedcrops',
            templateUrl: 'angular/views/loans/editplannedcrops.html',
            controller: 'EditPlannedCropsController'
          })
          .state('edit.prerequisites', {
            url: '/prerequisites',
            templateUrl: 'angular/views/loans/prerequisites.html',
            controller: 'EditPrerequisitesController'
          })
          .state('edit.quests', {
            url: '/quests',
            templateUrl: 'angular/views/loans/quests.html',
            controller: 'EditQuestsController'
          })
          .state('edit.references', {
            url: '/references',
            templateUrl: 'angular/views/loans/editreferences.html',
            controller: 'ReferencesController'
          })
          .state('edit.storage', {
            url: '/storage',
            templateUrl: 'angular/views/loans/editstorage.html',
            controller: 'EditStorageController'
          })
          .state('edit.summary', {
            url: '/summary',
            templateUrl: 'angular/views/loans/summary.html',
            controller: 'EditSummaryController'
          })
          .state('edit.terms', {
            url: '/terms',
            templateUrl: 'angular/views/loans/terms.html',
            controller: 'EditTermsController'
          })
          .state('edit.underwriting', {
            url: '/underwriting',
            templateUrl: 'angular/views/loans/underwriting.html',
            controller: 'EditUnderwritingController'
          })
          .state('edit.yield', {
            url: '/yield',
            templateUrl: 'angular/views/loans/edityield.html',
            controller: 'EditYieldController'
          })

        $urlRouterProvider.otherwise('/');
      });
})();