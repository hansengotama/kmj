<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('vihara_id')->nullable();
            $table->foreign('vihara_id')->references('id')->on('viharas')->onDelete('cascade');
            $table->unsignedBigInteger('payment_type_id');
            $table->foreign('payment_type_id')->references('id')->on('payment_types')->onDelete('cascade');
            $table->unsignedBigInteger('accepted_by_admin_id')->nullable();
            $table->foreign('accepted_by_admin_id')->references('id')->on('users')->onDelete('cascade');
            $table->boolean('is_email_sent')->default(false);
            $table->boolean('is_payment_success')->default(false);
            $table->bigInteger('nominal');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
