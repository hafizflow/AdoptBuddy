<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->integer('user_id')->after('id'); // Assuming you want to keep user_id for reference
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            // Revert 'status' to string
            $table->dropColumn('user_id');

        });
    }
};
