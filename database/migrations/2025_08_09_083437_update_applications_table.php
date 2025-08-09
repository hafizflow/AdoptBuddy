<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('applications', function (Blueprint $table) {
            $table->enum('status', ['pending', 'accepted', 'rejected'])
                  ->default('pending');
            $table->string('user_id')->after('id'); // Assuming you want to keep user_id for reference
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('applications', function (Blueprint $table) {
            // Revert 'status' to string
            $table->dropColumn('status');
            $table->dropColumn('user_id');

        });
    }
};
