<?php

use Illuminate\Database\Migrations\Migration;

class AlterUserTableAddStatusField extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('students', function ($table) {
            $table->enum('status', ['active', 'inactive']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('students', function ($table) {
            $table->dropColumn('status');
        });
    }
}
