<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFarmsTable extends Migration {

	public function up()
	{
		Schema::create('farms', function(Blueprint $table)
		{
			$table->increments('id');
      $table->integer('loan_id');
      $table->integer('county_id');
      $table->string('fsn')->nullable();
      $table->string('owner')->nullable();
      $table->double('share_rent')->default(0);
      $table->double('cash_rent')->default(0);
      $table->double('waived')->default(0);
      $table->string('when_due')->nullable();
      $table->double('acres')->default(0);
      $table->boolean('irr')->nullable();
      $table->boolean('ni')->nullable();
      $table->boolean('facirr')->nullable();
      $table->boolean('facni')->nullable();
      $table->double('fsa_paid')->nullable();
      $table->double('percent_irrigated')->default(0);
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('farms');
	}

}