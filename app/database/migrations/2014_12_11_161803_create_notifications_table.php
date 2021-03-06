<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotificationsTable extends Migration {

	public function up()
	{
		Schema::create('notifications', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id');
			$table->integer('loan_id')->nullable();
			$table->string('notification_type');
			$table->integer('report_id')->nullable();
			$table->string('task');
			$table->string('status')->default('pending');
			$table->timestamps();
		});
	}


	public function down()
	{
		Schema::drop('notifications');
	}

}
