<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLoanconditionsTable extends Migration
{

    public function up()
    {
        Schema::create('loanconditions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('crop_year');
            $table->integer('loan_id');
            $table->enum('category', ['loan', 'guar', 'free'])->default('free');
            $table->string('condition');
            $table->string('status')->default('pending');
            $table->date('action_date')->nullable();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::drop('loanconditions');
    }

}
