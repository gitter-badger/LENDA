<?php

class Loanfinancials extends \Eloquent {

	protected $fillable = ['loan_id', 'total_acres', 'cpa_financials', 'credit_score', 'grade', 'amount_requested', 'year_1_revenue', 'year_1_expenses', 'year_2_revenue', 'year_2_expenses', 'year_3_revenue', 'year_3_expenses', 'current_assets', 'current_asset_factor', 'current_asset_liability', 'intermediate_assets', 'intermediate_asset_factor', 'intermediate_asset_liability', 'fixed_assets', 'fixed_asset_factor', 'fixed_asset_liability', 'guaranty', 'prod', 'adj_prod', 'disc_prod', 'disc_adj_prod', 'ins_disc_prod', 'disc_ins', 'commit_arm', 'commit_dist', 'commit_other', 'commit_total', 'fee_processing', 'proc_fee', 'proc_fee_arm_only', 'fee_processing_onTotal', 'fee_service', 'srvc_fee', 'srvc_fee_arm_only', 'fee_service_onTotal', 'total_fsa_payment', 'total_claims', 'principal_arm', 'principal_dist', 'principal_other', 'principal', 'int_percent_arm', 'int_arm', 'int_percent_dist', 'int_dist', 'int_percent_other', 'int_other', 'interest', 'total_revenue', 'arm_and_dist', 'collateral', 'total_balance', 'remaining_balance', 'balance_paid',  'cash_flow', 'risk'];

	/* RELATIONSHIPS */
	public function loan()
	{
		return $this->belongsTo('loan', 'loan_id');
	}


}