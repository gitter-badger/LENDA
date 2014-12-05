<?php

class Loan extends \Eloquent {
	protected $dates = array('app_date', 'due_date');
	protected $fillable = ['app_date', 'due_date', 'loan_type_id', 'status_id', 'crop_year', 'season', 'season_full', 'loc_id', 'region_id', 'user_id', 'applicant_id', 'is_cross_collateralized', 'is_fast_tracked', 'has_distributor', 'distributor', 'is_stale', 'need_vote', 'has_comment', 'has_addendum', 'bankruptcy_history', 'required_3party', 'added_land', 'controlled_disbursement', 'attachments', 'its_list', 'fsa_compliant', 'prev_lien_verified', 'leases_valid', 'bankruptcy_order_received', 'received_3party', 'recommended', 'arm_approved', 'dist_approved', 'loan_closed', 'loan_closed_date', 'added_land_verified', 'arm_ucc_received', 'dist_ucc_received', 'aoi_received', 'ccc_received', 'rebate_assignment', 'limit_warning', 'crop_inspection', 'reconcilliation', 'account_classification'];

	/* RELATIONSHIPS */
  public function applicants()
    {
        return $this->belongsTo('Applicant', 'applicant_id');
    }

	public function comment()
	{
		return $this->hasMany('Comment');
	}

	public function committee()
	{
		return $this->hasMany('Committee');
	}

  public function corporations()
  {
    return $this->hasMany('Corporation');
  }

	public function crop()
	{
		return $this->belongsToMany('Crop');
	}

	public function cropdetails()
	{
		return $this->hasMany('Cropdetails');
	}

	public function cropyields()
	{
		return $this->hasMany('Cropyields');
	}

	public function distributor()
	{
		return $this->belongsTo('Distributor', 'distributor_id');
	}

	public function farms()
	{
		return $this->hasMany('Farm');
	}

	public function farmexpenses()
	{
		return $this->hasMany('Farmexpense');
	}

  public function financials()
  {
    return $this->hasOne('loanfinancials');
  }

	public function funduses()
	{
		return $this->hasMany('Funduses');
	}

  public function insurance()
  {
    return $this->hasOne('insurance');
  }

  public function loanconditions()
	{
		return $this->hasMany('Loanconditions');
	}

	public function loancrop()
	{
		return $this->hasMany('Loancrop');
	}

	public function loanexceptions()
	{
		return $this->hasMany('Loanexceptions');
	}

	public function loanfinancial()
	{
		return $this->hasOne('Loanfinancials');
	}

	public function loanquestions()
	{
		return $this->hasMany('Loanquestions');
	}

	public function loanstatus()
	{
		return $this->belongsTo('Loanstatus', 'status_id');
	}

	public function loantype()
	{
		return $this->belongsTo('Loantype', 'loan_type_id');
	}

	public function location()
	{
		return $this->belongsTo('Location', 'loc_id');
	}

  public function partners()
  {
    return $this->hasMany('Partners');
  }

	public function prerequisites()
	{
		return $this->hasMany('Prerequisites');
	}

	public function regions()
	{
		return $this->belongsTo('Region', 'region_id');
	}

  public function reqdocs()
  {
    return $this->hasMany('Requireddocuments');
  }

  public function staff(){
    return $this->belongsTo('Staff', 'user_id');
  }

	public function systemics()
	{
		return $this->hasMany('systemics');
	}

  public function ventures()
  {
    return $this->hasMany('Jointventure');
  }

	public function user()
	{
		return $this->belongsTo('User');
	}
	/* RELATIONSHIPS */

}