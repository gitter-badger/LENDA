<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoansTable extends Migration {

	public function up()
	{
		Schema::create('loans', function(Blueprint $table)
		{
			$table->increments('id');
      $table->date('app_date');
      $table->date('due_date')->nullable();
      $table->integer('loan_type_id');
      $table->integer('status_id')->default(1);
      $table->string('crop_year');
      $table->string('season', 3);
      $table->string('season_full');
      $table->integer('loc_id');
      $table->integer('region_id')->nullable();
      $table->integer('user_id');
      $table->integer('applicant_id');
      $table->boolean('is_active')->default(1);
      $table->boolean('is_cross_collateralized')->default(0);
      $table->boolean('is_fast_tracked')->default(0);
      $table->boolean('has_distributor')->default(0);
      $table->string('distributor_id')->nullable();
      $table->boolean('is_stale')->default(0);
      $table->boolean('need_vote')->default(0);
      $table->boolean('has_comment')->default(0);
      $table->boolean('has_addendum')->default(0);
      $table->boolean('bankruptcy_history')->default(0);
      $table->boolean('required_3party')->default(0);
      $table->boolean('added_land')->default(0);
      $table->boolean('controlled_disbursement')->default(0);
      $table->boolean('attachments')->default(0);
      $table->integer('its_list')->default(0);
      $table->integer('fsa_compliant')->default(0);
      $table->integer('prev_lien_verified')->default(0);
      $table->integer('leases_valid')->default(0);
      $table->integer('bankruptcy_order_received')->default(0);
      $table->integer('received_3party')->default(0);
      $table->integer('recommended')->default(0);
      $table->integer('arm_approved')->default(0);
      $table->integer('dist_approved')->default(0);
      $table->integer('loan_closed')->default(0);
      $table->date('loan_closed_date')->nullable();
      $table->integer('added_land_verified')->default(0);
      $table->integer('arm_ucc_received')->default(0);
      $table->integer('dist_ucc_received')->default(0);
      $table->integer('aoi_received')->default(0);
      $table->integer('ccc_received')->default(0);
      $table->integer('rebate_assignment')->default(0);
      $table->integer('limit_warning')->default(0);
      $table->integer('crop_inspection')->default(0);
      $table->integer('reconcilliation')->default(0);
      $table->boolean('conditions_asa')->default(1);
      $table->boolean('conditions_aci')->default(1);
      $table->boolean('conditions_areb')->default(0);
      $table->boolean('conditions_adis')->default(1);
      $table->boolean('conditions_pg')->default(1);
      $table->boolean('conditions_ccl')->default(0);
      $table->boolean('conditions_afsa')->default(0);
      $table->boolean('conditions_cd')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('loans');
	}

}