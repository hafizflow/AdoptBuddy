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
        Schema::create('applications', function (Blueprint $table) {
            $table->id(); // auto-incrementing primary key
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->text('address');
            $table->boolean('pet_before'); // true/false
            $table->text('message')->nullable(); // optional
            $table->string('applied_pet_name');
            $table->unsignedBigInteger('pet_id'); // foreign key column

            $table->timestamps();

            // Foreign key constraint (if you have a `pets` table)
            $table->foreign('pet_id')->references('id')->on('posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('application');
    }
};
