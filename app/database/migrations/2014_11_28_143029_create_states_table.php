<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStatesTable extends Migration {

	public function up()
	{
		Schema::create('states', function(Blueprint $table)
		{
			$table->increments('id');
      $table->string('abr');
      $table->string('state');
		});
	}


	public function down()
	{
		Schema::drop('states');
	}

}
