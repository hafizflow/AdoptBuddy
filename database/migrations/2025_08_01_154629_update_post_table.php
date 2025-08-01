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
        Schema::table('posts', function (Blueprint $table) {
                $table->decimal('lat', 10, 7)->default(0);
                $table->decimal('lng', 10, 7)->default(0)->after('lat');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
         Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn('lat');
            $table->dropColumn('lng');
            $table->string('location')->after('id');
        });
    }
};
