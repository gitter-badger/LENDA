<?php

class LoanfinancialsTableSeeder extends Seeder {

	public function run()
	{
		//2 - Ag-Input
		Loanfinancials::create([
			'loan_id' => 1,
			'amount_requested' => 2750000,
			'collateral_equipment' => 300000,
			'collateral_realestate' => 500000,
			'guaranty' => 259465.97,
			'prod' => 359237.87,
			'adj_prod' => 359237.87,
			'disc_prod' => 179618.94,
			'disc_adj_prod' => 179618.94,
			'ins_disc_prod' => 81034.82,
			'disc_ins' => 64827.85,
			'commit_arm' => 126176.93,
			'commit_dist' => 120140.075,
			'commit_other' => 95945.762,
			'commit_total' => 342262.767,
			'fee_processing' => 1,
			'proc_fee' => 2463.17005,
			'proc_fee_arm_only' => 1261.7693,
			'fee_service' => 1.5,
			'srvc_fee' => 3604.20225,
			'srvc_fee_arm_only' => 1892.65395,
			'total_fee_percent' => 2.5,
			'fee_total' => 6480.516429844,
			'total_fsa_payment' => 45000,
			'total_claims' => 25000,
			'principal_arm' => 12647.743,
			'principal_dist' => 10921.825,
			'principal_other' => 8722.342,
			'principal' => 32291.91,
			'int_percent_arm'	=> 9,
			'int_arm' => 5969.04,
			'int_percent_dist' => 9,
			'int_dist' => 5154.501,
			'int_percent_other' => 9,
			'int_other' => 4116.464,
			'interest' => 15240.016,
			'total_revenue' => 395280.468,
			'arm_and_dist' => 273521.149,
			'collateral' =>	268891.469,
			'total_balance' => 342262.767,
			'balance_paid' => 0,
			'remaining_balance' => 342262.767,
			'cash_flow' => 61412.76,
			'risk' => -7575.84
		]);

		//5 - Capital Bridge
		Loanfinancials::create([
			'loan_id' => 2,
			'amount_requested' 	=> 25000000,
			'guaranty' => 259465.97,
			'prod' => 359237.87,
			'adj_prod' => 359237.87,
			'disc_prod' => 179618.94,
			'disc_adj_prod' => 179618.94,
			'ins_disc_prod' => 81034.82,
			'disc_ins' => 64827.85,
			'commit_arm' => 114706.30,
			'commit_dist' => 0,
			'commit_other' => 87223.42,
			'commit_total' => 201929.72,
			'fee_processing' => 1,
			'proc_fee' => 1233.93,
			'proc_fee_arm_only' => 1233.93,
			'fee_service' => 1.5,
			'srvc_fee' => 1850.89,
			'srvc_fee_arm_only' => 1850.89,
			'total_fee_percent' => 2.5,
			'fee_total' => 3084.82,
			'total_fsa_payment' => 0,
			'total_claims' => 0,
			'principal_arm' => 126477.43,
			'principal_dist' => 0,
			'principal_other' => 87223.42,
			'principal' => 213700.85,
			'int_percent_arm'	=> 9,
			'int_arm' => 5426.40,
			'int_percent_dist' => 0,
			'int_dist' => 0,
			'int_percent_other' => 9,
			'int_other' => 3742.24,
			'interest' => 5426.40,
			'total_revenue' => 359345.88,
			'arm_and_dist' => 248655.59,
			'collateral' =>	244446.79,
			'total_balance' => 311147.97,
			'balance_paid' => 0,
			'remaining_balance' => 311147.97,
			'cash_flow' => 34118.20,
			'risk' => -4208.80,
			'risk_adj' => 200000
		]);

		//4 - Ag-Pro Fasttrack
		Loanfinancials::create([
			'loan_id' => 3,
			'amount_requested' 	=> 25000000,
			'guaranty' => 259465.97,
			'prod' => 359237.87,
			'adj_prod' => 359237.87,
			'disc_prod' => 179618.94,
			'disc_adj_prod' => 179618.94,
			'ins_disc_prod' => 81034.82,
			'disc_ins' => 64827.85,
			'commit_arm' => 114706.30,
			'commit_dist' => 0,
			'commit_other' => 87223.42,
			'commit_total' => 1234930.27,
			'fee_processing' => 1,
			'proc_fee' => 1233.93,
			'proc_fee_arm_only' => 1233.93,
			'fee_service' => 1.5,
			'srvc_fee' => 1850.89,
			'srvc_fee_arm_only' => 1850.89,
			'total_fee_percent' => 2.5,
			'fee_total' => 3084.82,
			'total_fsa_payment' => 0,
			'total_claims' => 0,
			'principal_arm' => 126477.43,
			'principal_dist' => 0,
			'principal_other' => 87223.42,
			'principal' => 311147.97,
			'int_percent_arm'	=> 9,
			'int_arm' => 5426.40,
			'int_percent_dist' => 0,
			'int_dist' => 0,
			'int_percent_other' => 9,
			'int_other' => 3742.24,
			'interest' => 5426.40,
			'total_revenue' => 359345.88,
			'arm_and_dist' => 248655.59,
			'collateral' =>	244446.79,
			'total_balance' => 311147.97,
			'balance_paid' => 0,
			'remaining_balance' => 311147.97,
			'cash_flow' => 34118.20,
			'risk' => -4208.80,
			'risk_adj' => 110
		]);

		//6 - Ag-Vest
		Loanfinancials::create([
			'loan_id' => 4,
			'amount_requested' 	=> 25000000,
			'guaranty' => 259465.97,
			'prod' => 359237.87,
			'adj_prod' => 359237.87,
			'disc_prod' => 179618.94,
			'disc_adj_prod' => 179618.94,
			'ins_disc_prod' => 81034.82,
			'disc_ins' => 64827.85,
			'commit_arm' => 114706.30,
			'commit_dist' => 109218.25,
			'commit_other' => 87223.42,
			'commit_total' => 311147.97,
			'fee_processing' => 1,
			'proc_fee' => 2060.96,
			'proc_fee_arm_only' => 1233.93,
			'fee_service' => 1.5,
			'srvc_fee' => 3836.63,
			'srvc_fee_arm_only' => 1850.89,
			'total_fee_percent' => 2.5,
			'fee_total' => 5897.59,
			'total_fsa_payment' => 0,
			'total_claims' => 0,
			'principal_arm' => 126477.43,
			'principal_dist' => 109218.25,
			'principal_other' => 87223.42,
			'principal' => 311147.97,
			'int_percent_arm'	=> 9,
			'int_arm' => 5426.40,
			'int_percent_dist' => 9,
			'int_dist' => 4685.91,
			'int_percent_other' => 9,
			'int_other' => 3742.24,
			'interest' => 13854.56,
			'total_revenue' => 359345.88,
			'arm_and_dist' => 248655.59,
			'collateral' =>	244446.79,
			'total_balance' => 311147.97,
			'balance_paid' => 0,
			'remaining_balance' => 311147.97,
			'cash_flow' => 34118.20,
			'risk' => -4208.80,
			'risk_adj' => 50000
		]);

		//3 - Ag-Pro
		Loanfinancials::create([
			'loan_id' => 5,
			'amount_requested' 	=> 25000000,
			'guaranty' => 259465.97,
			'prod' => 359237.87,
			'adj_prod' => 359237.87,
			'disc_prod' => 179618.94,
			'disc_adj_prod' => 179618.94,
			'ins_disc_prod' => 81034.82,
			'disc_ins' => 64827.85,
			'commit_arm' => 114706.30,
			'commit_dist' => 0,
			'commit_other' => 87223.42,
			'commit_total' => 201929.72,
			'fee_processing' => 1,
			'proc_fee' => 1233.93,
			'proc_fee_arm_only' => 1233.93,
			'fee_service' => 1.5,
			'srvc_fee' => 1850.89,
			'srvc_fee_arm_only' => 1850.89,
			'total_fee_percent' => 2.5,
			'fee_total' => 3084.82,
			'total_fsa_payment' => 0,
			'total_claims' => 0,
			'principal_arm' => 126477.43,
			'principal_dist' => 0,
			'principal_other' => 87223.42,
			'principal' => 311147.97,
			'int_percent_arm'	=> 9,
			'int_arm' => 5426.40,
			'int_percent_dist' => 0,
			'int_dist' => 0,
			'int_percent_other' => 9,
			'int_other' => 3742.24,
			'interest' => 13854.56,
			'total_revenue' => 359345.88,
			'arm_and_dist' => 248655.59,
			'collateral' =>	244446.79,
			'total_balance' => 311147.97,
			'balance_paid' => 0,
			'remaining_balance' => 311147.97,
			'cash_flow' => 34118.20,
			'risk' => -4208.80,
			'risk_adj' => 90910
		]);

		//1 - All-In
		Loanfinancials::create([
			'loan_id' => 6,
			'amount_requested' 	=> 25000000,
			'guaranty' => 259465.97,
			'prod' => 359237.87,
			'adj_prod' => 359237.87,
			'disc_prod' => 179618.94,
			'disc_adj_prod' => 179618.94,
			'ins_disc_prod' => 81034.82,
			'disc_ins' => 64827.85,
			'commit_arm' => 114706.30,
			'commit_dist' => 109218.25,
			'commit_other' => 87223.42,
			'commit_total' => 311147.97,
			'fee_processing' => 1,
			'proc_fee' => 2060.96,
			'proc_fee_arm_only' => 1233.93,
			'fee_service' => 1.5,
			'srvc_fee' => 3836.63,
			'srvc_fee_arm_only' => 1850.89,
			'total_fee_percent' => 2.5,
			'fee_total' => 5897.59,
			'total_fsa_payment' => 0,
			'total_claims' => 0,
			'principal_arm' => 126477.43,
			'principal_dist' => 109218.25,
			'principal_other' => 87223.42,
			'principal' => 311147.97,
			'int_percent_arm'	=> 9,
			'int_arm' => 5426.40,
			'int_percent_dist' => 9,
			'int_dist' => 4685.91,
			'int_percent_other' => 9,
			'int_other' => 3742.24,
			'interest' => 13854.56,
			'total_revenue' => 359345.88,
			'arm_and_dist' => 248655.59,
			'collateral' =>	244446.79,
			'total_balance' => 311147.97,
			'balance_paid' => 0,
			'remaining_balance' => 311147.97,
			'cash_flow' => 34118.20,
			'risk' => -4208.80,
			'risk_adj' => 2134
		]);

		//7 - Grain-Storage
		Loanfinancials::create([
			'loan_id' => 7,
			'amount_requested' => 200000,
			'commit_arm' => 200000,
			'commit_total' => 200000,
			'fee_processing' => 1,
			'proc_fee' => 2000,
			'proc_fee_arm_only' => 2000,
			'fee_service' => 1.5,
			'srvc_fee' => 3000,
			'srvc_fee_arm_only' => 3000,
			'total_fee_percent' => 2.5,
			'fee_total' => 5000,
			'principal_arm' => 200000,
			'principal' => 200000,
			'int_percent_arm'	=> 9,
			'int_arm' => 18000,
			'interest' => 18000,
			'total_revenue' => 218000,
			'arm_and_dist' => 218000,
			'total_balance' => 218000,
			'balance_paid' => 0,
			'remaining_balance' => 218000,
			'cash_flow' => 126460,
			'risk' => 179380
		]);

		//2 - Ag-Input
		Loanfinancials::create([
			'loan_id' => 8,
			'amount_requested' 	=> 25000000,
			'guaranty' => 259465.97,
			'prod' => 359237.87,
			'adj_prod' => 359237.87,
			'disc_prod' => 179618.94,
			'disc_adj_prod' => 179618.94,
			'ins_disc_prod' => 81034.82,
			'disc_ins' => 64827.85,
			'commit_arm' => 114706.30,
			'commit_dist' => 109218.25,
			'commit_other' => 87223.42,
			'commit_total' => 311147.97,
			'fee_processing' => 1,
			'proc_fee' => 2060.96,
			'proc_fee_arm_only' => 1233.93,
			'fee_service' => 1.5,
			'srvc_fee' => 3836.63,
			'srvc_fee_arm_only' => 1850.89,
			'total_fee_percent' => 2.5,
			'fee_total' => 5897.59,
			'total_fsa_payment' => 0,
			'total_claims' => 0,
			'principal_arm' => 126477.43,
			'principal_dist' => 109218.25,
			'principal_other' => 87223.42,
			'principal' => 311147.97,
			'int_percent_arm'	=> 9,
			'int_arm' => 5426.40,
			'int_percent_dist' => 9,
			'int_dist' => 4685.91,
			'int_percent_other' => 9,
			'int_other' => 3742.24,
			'interest' => 13854.56,
			'total_revenue' => 359345.88,
			'arm_and_dist' => 248655.59,
			'collateral' =>	244446.79,
			'total_balance' => 311147.97,
			'balance_paid' => 0,
			'remaining_balance' => 311147.97,
			'cash_flow' => 34118.20,
			'risk' => -4208.80
		]);
	}
}