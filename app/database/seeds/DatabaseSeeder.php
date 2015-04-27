<?php

class DatabaseSeeder extends Seeder {

  protected $tables = [
      'addendumtypes',
      'addfins',
      'addloans',
      'admingrader',
      'affiliates',
      'agencies',
      'agents',
      'applicants',
      'applicantfinancials',
      'attachments',
      'calendars',
      'comments',
      'commentstatus',
      'committee',
      'committeespecs',
      'conditions',
      'corporations',
      'counties',
      'countycropdefaults',
      'crops',
      'cropdetails',
      'cropexpenses',
      'croppractices',
      'defaultexpenses',
      'distributors',
      'entitytypes',
      'expenses',
      'exceptions',
      'farmcrops',
      'farmers',
      'farmexpenses',
      'farmpractices',
      'farms',
      'globals',
      'grainstorage',
      'guarantors',
      'insurance',
      'insuranceoptions',
      'insurancetypes',
      'jointventures',
      'loanassets',
      'loancapacity',
      'loancrops',
      'loanconditions',
      'loandistributor',
      'loanexceptions',
      'loanfinancials',
      'loanpractices',
      'loanquestions',
      'loans',
      'loanstatus',
      'loantypes',
      'locations',
      'matrix',
      'notifications',
      'partners',
      'pdfapps',
      'practices',
      'prerequisites',
      'priorliens',
      'profiles',
      'ratioconstraints',
      'references',
      'regions',
      'reports',
      'requireddocuments',
      'responses',
      'roles',
      'screens',
      'spendcats',
      'states',
      'systemics',
      'units',
      'users',
      'viewoptions',
      'vote',
      'votestatus'
  ];

  protected $seeders = [
      'AddendumTypesTableSeeder',
      'AddFinsTableSeeder',
      'AddLoansTableSeeder',
      'AdmingraderTableSeeder',
      'AgentTableSeeder',
      'AffiliateTableSeeder',
      'AgenciesTableSeeder',
      'ApplicantsTableSeeder',
      'ApplicantfinancialsTableSeeder',
      'AttachmentsTableSeeder',
      'CalendarsTableSeeder',
      'CommentsTableSeeder',
      'CommentstatusTableSeeder',
      'CommitteeTableSeeder',
      'CommitteeSpecsTableSeeder',
      'ConditionsTableSeeder',
      'CorporationTableSeeder',
      'CountiesTableSeeder',
      'CountycropdefaultsTableSeeder',
      'CropexpensesTableSeeder',
      'CropsTableSeeder',
      'CropdetailsTableSeeder',
      'CroppracticesTableSeeder',
      'DefaultExpensesTableSeeder',
      'DistributorsTableSeeder',
      'EntitytypesTableSeeder',
      'ExceptionsTableSeeder',
      'ExpensesTableSeeder',
      'FarmcropsTableSeeder',
      'FarmersTableSeeder',
      'FarmexpensesTableSeeder',
      'FarmpracticesTableSeeder',
      'FarmsTableSeeder',
      'GlobalsTableSeeder',
      'GrainstorageTableSeeder',
      'GuarantorTableSeeder',
      'InsuranceTableSeeder',
      'InsuranceoptionsTableSeeder',
      'InsurancetypesTableSeeder',
      'JointventuresTableSeeder',
      'LoanassetsTableSeeder',
      'LoanCropsTableSeeder',
      'LoandistributorTableSeeder',
      'LoancapacityTableSeeder',
      'LoanconditionsTableSeeder',
      'LoanexceptionsTableSeeder',
      'LoanfinancialsTableSeeder',
      'LoansTableSeeder',
      'LoanpracticesTableSeeder',
      'LoanquestionsTableSeeder',
      'LoanstatusTableSeeder',
      'LoantypesTableSeeder',
      'LocationsTableSeeder',
      'MatrixTableSeeder',
      'NotificationTableSeeder',
      'PartnersTableSeeder',
      'PdfAppsTableSeeder',
      'PracticesTableSeeder',
      'PrerequisitesTableSeeder',
      'PriorlienTableSeeder',
      'ProfilesTableSeeder',
      'RatioconstraintsTableSeeder',
      'ReferencesTableSeeder',
      'RegionsTableSeeder',
      'ReportsTableSeeder',
      'RequireddocumentsTableSeeder',
      'ResponsesTableSeeder',
      'RolesTableSeeder',
      'ScreensTableSeeder',
      'SpendcatsTableSeeder',
      'StatesTableSeeder',
      'SystemicsTableSeeder',
      'UnitsTableSeeder',
      'UsersTableSeeder',
      'ViewoptionsTableSeeder',
      'VotesTableSeeder',
      'VotestatusTableSeeder'
  ];

  public function run()
  {
    Eloquent::unguard();

    $this->cleanDatabase();

    foreach($this->seeders as $seedClass)
    {
      $this->call($seedClass);
    }
  } // end run() fn

  private function cleanDatabase()
  {
    DB::statement('SET FOREIGN_KEY_CHECKS=0');

    foreach($this->tables as $table)
    {
      DB::table($table)->truncate();
    }

    DB::statement('SET FOREIGN_KEY_CHECKS=1');
  } // end cleanDatabase() fn

}
