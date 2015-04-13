<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRegionsTable extends Migration {

	public function up()
	{
		Schema::create('regions', function(Blueprint $table)
		{
			$table->increments('id');
            $table->string('region');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('regions');
	}

}
